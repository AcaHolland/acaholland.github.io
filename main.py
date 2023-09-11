from bottle import route, run, template
import os

@route('/api/page/<pageName>')
def index(pageName):
    validPageNames = ["about", "contact", "events", "home", "links", "poetry", "teaching"]
    pageDir = "frontend\\pages\\"
    if pageName not in validPageNames:
        pageDir += "404.html"
    else:
        pageDir += (pageDir + ".html")
    return ## Insert code to retreve html file here

run(host='localhost', port=8080)