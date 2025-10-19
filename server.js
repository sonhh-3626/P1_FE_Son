const jsonServer = await import("json-server");
const auth = await import("json-server-auth");
const cors = await import("cors");

// Access the default exports
const jsonServerDefault = jsonServer.default;
const authDefault = auth.default;
const corsDefault = cors.default;

const app = jsonServerDefault.create();
const router = jsonServerDefault.router("db.json");

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router
app.use(corsDefault());
app.use(jsonServerDefault.defaults());
app.use(authDefault);
app.use(router);

app.listen(3000, () => {
  console.log("✅ JSON Server is running at http://localhost:3000");
});
