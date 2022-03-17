# Install dependencies
yarn

# For local development
# UI will be running on port 3000; server will be running on port 8080
yarn dev

# For production
# The app will be running on port 8080
yarn build
yarn start


# APIs
1. GET /api/physicians
This will return all the physicians

2. GET /api/appointments?physicianId={id}
This will return all appointments for the particular physician