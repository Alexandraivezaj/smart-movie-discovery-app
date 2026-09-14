function registerUser(req, res) {
  res.status(201).json({
    message: "User registered successfully",
    user: {
      email: req.body.email || "user@example.com",
    },
  });
}

function loginUser(req, res) {
  res.json({
    message: "Login successful",
    token: "mock-jwt-token",
  });
}

function getCurrentUser(req, res) {
  res.json({
    id: 1,
    email: "user@example.com",
    name: "Demo User",
  });
}

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
