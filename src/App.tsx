import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Interface } from "readline";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

let hello = "hello";
let num: number = 2;
let bool: boolean = true;

let arry = [true, false, "hi"];

interface NAME {
  first: string;
  last: string | null;
}

let name: NAME = { first: "taro", last: null };

const func2 = (x: number, y: number): number => {
  return x + y;
};

type PROFILE = {
  name: string;
  age: number;
};

type CITY = {
  pref: string;
  town: string;
};

type USER = PROFILE & CITY;

const user: USER = {
  name: "mm",
  age: 33,
  town: "yu",
  pref: "to",
};

let ol: number | boolean;
ol = true;

let gafa: "google" | "apple" | "facebook" | "amazon";

gafa = "apple";

let tnum: number = 4;
let tnum2: typeof tnum;
tnum2 = 10;

let tstr = { x: 4 };
let tstr2: typeof tstr = { x: 100 };

//keyof

type KEYS = {
  primary: string;
  secondary: string;
};

let to: keyof KEYS;
to = "primary";

let SPORT = {
  succer: "Soccer",
  baseball: "Baseball",
};

let ok: keyof typeof SPORT;
ok = "succer";

enum OS {
  mac,
  windows,
  linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.windows,
};

interface GEN<T extends string | number> {
  item: T;
}

const gen1: GEN<number> = {
  item: 2,
};

function funcGen<T>(props: T) {
  return { item: props };
}

const jj = funcGen<string | number>(4);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from app" />
      </header>
    </div>
  );
};

export default App;
