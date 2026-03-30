import React from "react";
import { motion } from "framer-motion";
import { Grid, Typography, Button, Box } from "@mui/material";
import profile from "../images/profile.png"; 
import resume from "../Resume/cv.pdf"; 

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(27, 26, 26)",
        color: "#fff",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left side: Profile image */}
        <Grid item xs={12} md={6} textAlign="center">
          <motion.img
            src={profile}
            alt="Sridharshini"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </Grid>

        {/* Right side: Intro + Summary + CV */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Hi I'm <span style={{ color: "#ddd" }}>Sridharshini</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#ddd", mb: 3, maxWidth: "600px", fontSize: "1.1rem" }}
            >
              Frontend Developer with 5+ years of experience specializing in React.js, JavaScript (ES6+), and modern UI development. Expert in building scalable, high-performance web applications with reusable components and optimized state management using Redux Toolkit. Strong experience in REST API integration, performance optimization, and cross-browser compatibility. Proven track record of delivering enterprise-grade solutions in Agile environments.
            </Typography>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#38bdf8",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
              }}
            >
              View My CV
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
