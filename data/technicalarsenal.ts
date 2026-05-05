import { TechnicalArsenalTypes } from "@/types/technicalarsenal";

import { ExcelIcon } from "@/public/icon/excel";
import { PythonIcon } from "@/public/icon/python";
import { ScikitlearnIcon } from "@/public/icon/scikit-learn";
import { PowerBIIcon } from "@/public/icon/powerBI";
import { TensorFlowIcon } from "@/public/icon/tensorflow";
import { PyTorchIcon } from "@/public/icon/pytorch";
import { ReactIcon } from "@/public/icon/react";
import { NextJSIcon } from "@/public/icon/nextJS";
import { TailwindIcon } from "@/public/icon/tailwind";
import { LaravelIcon } from "@/public/icon/laravel";
import { FlaskIcon } from "@/public/icon/flask";
import { FastAPIIcon } from "@/public/icon/fastAPI";
import { ExpressJSIcon } from "@/public/icon/expressJS";
import { PostgreSQLIcon } from "@/public/icon/postgreSQL";
import { MySQLIcon } from "@/public/icon/mySQL";
import { GitIcon } from "@/public/icon/git";
import { GitHubIcon } from "@/public/icon/github";
import { HTMLIcon } from "@/public/icon/html";
import { CssIcon } from "@/public/icon/css";
import { JavaScriptIcon } from "@/public/icon/javascript";
import { TypeScriptIcon } from "@/public/icon/typescript";
import { PHPIcon } from "@/public/icon/php";

import { FallbackIcon } from "@/public/icon/fallback";

export const TechnicalArsenals: TechnicalArsenalTypes[] = [
  { 
    arsenal: "data analytics", 
    techstacks: [ 
      {
        name: "excel",
        comp: ExcelIcon,
      },
      {
        name: "python",
        comp: PythonIcon,
      },
      {
        name: "scikit-learn",
        comp: ScikitlearnIcon,
      },
      {
        name:"powerBI",
        comp: PowerBIIcon,
      }
    ]
  },
  {
    arsenal: "AI", 
    techstacks: [ 
      {
        name: "tensorFlow",
        comp: TensorFlowIcon,
      },
      { 
        name: "pyTorch",
        comp: PyTorchIcon,
      },
      { name: "~",
        comp: FallbackIcon
      },
      { name: "~",
        comp: FallbackIcon
      },
    ]
  },
  {
    arsenal: "frontend", 
    techstacks: [
      {
        name: "react",
        comp: ReactIcon,
      },
      {
        name: "nextJS",
        comp: NextJSIcon,
      },
      {
        name: "tailwind",
        comp: TailwindIcon,
      },
      {
        name: "~",
        comp: FallbackIcon
      },
    ]
  },
  {
    arsenal: "backend", 
    techstacks: [       
      {
        name: "laravel",
        comp: LaravelIcon,
      },
      {
        name: "flask",
        comp: FlaskIcon,
      },
      {
        name: "fastAPI",
        comp: FastAPIIcon,
      },
      {
        name: "expressJS",
        comp: ExpressJSIcon,
      },
    ]
  },
  {
    arsenal: "database", 
    techstacks: [ 
      {
        name: "postgreSQL",
        comp: PostgreSQLIcon,
      },
      {
        name: "mySQL",
        comp: MySQLIcon,
      },
      {
        name: "~",
        comp: FallbackIcon
      },
      {
        name: "~",
        comp: FallbackIcon
      },
    ]
  },
  {
    arsenal: "deployment", 
    techstacks: [ 
      {
        name: "git",
        comp: GitIcon,
      },
      {
        name: "gitHub",
        comp: GitHubIcon,
      },
      {
        name: "~",
        comp: FallbackIcon
      },
      {
        name: "~",
        comp: FallbackIcon
      },
    ]
  },
  {
    arsenal: "language", 
    techstacks: [ 
      {
        name: "python",
        comp: PythonIcon,
      },
      {
        name: "hTML",
        comp: HTMLIcon,
      },
      {
        name: "cSS",
        comp: CssIcon,
      },
      {
        name: "javaScript",
        comp: JavaScriptIcon,
      },
      {
        name: "typeScript",
        comp: TypeScriptIcon,
      },
      {
        name: "pHP",
        comp: PHPIcon,
      },
    ]
  },
]