import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userAuth from "../mongoDb/models/userAuth.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import dotenv from "dotenv";
import profileModel from "../mongoDb/models/userProfile.js";
dotenv.config();

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (email, password, done) {
      const user = await userAuth.findOne({ email: email });
      if (!user) return done(null, false, { message: "user not found" });
      else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) return done(null, user);
          else return done(null, false, { message: "wrong password" });
        });
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const newuser = await userAuth.findOne({ email: profile.email });
        console.log(profile);

        if (!newuser) {
          const user1 = new userAuth({
            email: profile.email,
            password: "google",
          });
          await user1.save();
          const prof = new profileModel({
            userid: user1.id,
            imgurl: profile._json.picture,
            email: profile._json.email,
            name: profile._json.given_name,
          });
          prof.save();
          return done(null, user1);
        } else {
          return done(null, newuser);
        }
      } catch (err) {
        console.log("error in google strategy login");
        return done(err, null);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log(user.id);
  done(null, user.id); //assign the session a unique id user.id.
});

passport.deserializeUser(async function (id, done) {
  let user = await userAuth.findById(id);
  console.log("user:", user);

  done(null, user);
});
