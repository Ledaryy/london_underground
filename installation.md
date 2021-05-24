## Installation guide:

### To start using this map, you need to install the IDE, Python and Node (VS, PyCharm, etc.)
- For NodeJS - https://nodejs.org/en/
- For Python - https://www.python.org/
- Create a folder, open the code editor, open the console (cmd).
- ### 1. Create a virtualenv
- Download the virtual envirement package
```Shell
pip install virtualenv
```
- Create virtual envirement with the name "venv"
```Shell
virtualenv venv
```

- ### Activate venv
- Linux - ``` source venv/bin/activate ```
- Windows - ``` venv\Scripts\activate ```

- ### Clone the gitHub repo & Install
- ``` git clone https://github.com/Ledaryy/london_underground ```
- To navigate use "cd "folder name"" and "cd .."
- (venv) ``` pip install -r requirements.txt ```
- Navigate to front end folder
- (venv) ``` npm install package.json ```

- ### Migrate & User & Run
- Navigate to backend folder, then to underground folder
- (venv) ``` python manage.py migrate ```
- (venv) ``` python manage.py runserver ```

- ### Webpack
- Navigate to frontend folder (with cd and cd..)
- (venv) ``` npm run dev ```
