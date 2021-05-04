<br/>
  <h1 align="center">
    London Underground website! 
  </h1>
  <h2 align="center">
    We are open-source, you are welcome to contribute!
  </h2>
<br/>

# All Materials:

## 🔗 Links
- **Roadmap/ToDo list: [ToDo](https://github.com/Ledaryy/london_underground/blob/master/todo.md)**
- **How to install (full guide): [Install](https://github.com/Ledaryy/london_underground/blob/master/installation.md)**

## What was done:
- Django + React setup
- Zoomable london underground map (5 scales, and more than 1000 pieces!)
<img src="https://media.giphy.com/media/AWtdHlEF8G8Hyw5SKH/giphy.gif"/>


## Quick installation guide:

- ### Create a virtualenv
```Shell
pip install virtualenv
```
```Shell
virtualenv venv
```

- ### Activate venv
- Linux - ``` source venv/bin/activate ```
- Windows - ``` venv\Scripts\activate ```

- ### Clone & Install
- ``` git clone https://github.com/Ledaryy/london_underground ```
- (venv) ``` pip install -r requirements.txt ```
- (venv) ``` npm install package.json ```

- ### Migrate & User & Run
- (venv) ``` python manage.py migrate ```
- (venv) ``` python manage.py createsuperuser ```
- (venv) ``` python manage.py runserver ```