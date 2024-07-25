#!/usr/bin/env node
import fs from "fs"

function rclean() {
    console.log("Cleaned React project")
    fs.readFile("src/index.ts", 'utf-8', (err: any, data: any) => {
        if (err) throw err;
        console.log(data)
    })
}

rclean()