---
title: "NarayanSeva"

description: "A frontend + backend project that won first position in the MU20 Hackathon Challenge. It is a platform to help reduce world hunger by providing a medium for excess food to be given to charities/NGOs."
image: "/images/ns_image.png"
carousel: ["/images/ns_image.png", "/images/ns_image2.png"]

tags: ["Python", "HTML", "CSS", "JavaScript", "Flask"]
---

# Technology Stack

The backend was made in Python using flask to bridge between HTML/CSS/JS. OSRM (Open Source Routing Machine) was used to get location data and nodes. Google's OR-TOOLS library in python was used to find the shortest distance between nodes considering the constraints such as food type, quantity etc.

# About Project

Link to GitHub repository containing README with more details as well as the files with instructions to run locally -> https://github.com/mukundgupta/NarayanSeva

This is a platform designed to further the UN SDG-2 Zero Hunger. Our application connects donors i.e. places where food is in excess and may be wasted (schools, grocery stores, restaurants, bakeries and the like ) to places that require food to be donated (food banks, orphanages, free food centers for the homeless etc.).

We were inspired by various initiatives our school takes for service to the underprivileged.

For grocery stores, supermarkets and bakeries, the application offers an option to track the units of food remaining and notifies the store if an item is nearing expiry, asking if they wish to donate the items which are unlikely to sell in the last few days. If they agree, our app will add the location to the list of places where food will be collected from.

The application allows schools and restaurants to input the amount of food that is left for the day, and our application figures out the number of people it will be able to feed and inputs them into an algorithm.

The algorithm determines the best route that a volunteer should follow to collect and deliver food, as well as allocating required amounts of food based on the type of food and vicinity.
