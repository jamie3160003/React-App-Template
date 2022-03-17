### Change Node Version

```nvm use```
<br />(You can skip this step if you are running node version 16.18)

---
### Install dependencies
```yarn```

---
### For local development
```yarn dev```
#### UI will be running on port 3000; server will be running on port 8080


---
### For production
#### The app will be running on port 8080
```yarn build```
<br />```yarn start```

---
### APIs
1. GET /api/physicians
This will return all the physicians

2. GET /api/appointments?physicianId={id}
This will return all appointments for the particular physician
