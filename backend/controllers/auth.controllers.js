import { supabase } from "../supabase.config.js";

//signup
export const signup = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
};

//login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login Error:", error.message);

    // Return a user-friendly error message
    if (error.message.includes("Email not confirmed")) {
      return res.status(400).json({
        error:
          "Your email address is not confirmed. Please check your email for the confirmation link.",
      });
    }

    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
};
