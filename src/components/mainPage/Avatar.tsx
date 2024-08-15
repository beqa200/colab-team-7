import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useEffect, useState } from "react";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

export default function BackgroundLetterAvatars() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });
  const [loading, setLoading] = useState(true); // To manage the loading state
  const [showName, setShowName] = useState(false); // To manage the visibility of the user's name
  const [tokenFound, setTokenFound] = useState(true); // To manage the token status

  // Function to fetch user data
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    const csrfToken = ""; // Add CSRF token if required

    if (token) {
      setTokenFound(true); // Token found
      try {
        const response = await axios.get(
          "https://ecommerce-api-r62c.onrender.com/dj-rest-auth/user/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "X-CSRFToken": csrfToken,
            },
          }
        );

        // Set user data if response is successful
        const { first_name, last_name, username } =
          response.data.user || response.data;
        setUser({ first_name, last_name, username });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Invalid or expired token");
          // Optionally clear the token if invalid
          localStorage.removeItem("token");
          setTokenFound(false); // Token not valid
        } else {
          console.error("Error fetching user data:", error);
          setTokenFound(false); // Token valid but error fetching data
        }
        // Fallback to default avatar if there is an error
        setUser({ first_name: "", last_name: "", username: "Guest" });
      }
    } else {
      setTokenFound(false); // No token found
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const displayName = user.username;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-dot": {
      backgroundColor: "#b0b7ac",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {loading ? (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: "25px",
            width: "25px",
            fill: "grey",
          }}
        >
          <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1-3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
        </svg>
      ) : tokenFound ? (
        <div>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              {...stringAvatar(displayName)}
              onClick={() => setShowName(!showName)} // Toggle visibility on click
            />
          </StyledBadge>
        </div>
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            height: "25px",
            width: "25px",
            fill: "grey",
          }}
        >
          <path d="M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1-3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7z"></path>
        </svg>
      )}
      {showName && tokenFound && (
        <span style={{ marginLeft: "10px" }}>{displayName}</span>
      )}
    </Stack>
  );
}
