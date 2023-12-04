const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const server = require("./resources/app.js");
const { conn } = require("./resources/db.js");
const port=process.env.PORT ||3001
// Syncing all the models at once.
conn.sync({ force:true }).then(() => {
    server.listen(port, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console

  });
});
function createWindow() {
  const mainWindow = new BrowserWindow({
  width: 800,
  height: 600,
 });
mainWindow.loadURL(
  isDev
  ? "http://localhost:3000"
  : `file://${path.join(__dirname, "../build/index.html")}`
 );
if (isDev) {
  mainWindow.webContents.openDevTools();
 }
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});