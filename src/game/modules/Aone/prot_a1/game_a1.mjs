import GUI from "./gui.mjs";
console.log("G:", GUI);

GUI.line("Sei in mischia")
    .removeLineBreak()
    .line(' con un Troll!')
    //.clear()
    .line("Da capo")
    .colored("Ro:", 34, 0xff0000)
    .line('Other line.');
