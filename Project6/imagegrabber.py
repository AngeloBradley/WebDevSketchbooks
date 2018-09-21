import re
import requests
from bs4 import BeautifulSoup

sites = {}

sites['eaglerock'] = 'https://www.amoeba.com/blog/2010/04/eric-s-blog/california-fool-s-gold-exploring-eagle-rock.html'
sites['cypresspark'] = 'https://www.amoeba.com/blog/2009/07/eric-s-blog/california-fool-s-gold-exploring-cypress-park.html'
sites['glassellpark'] = 'https://www.amoeba.com/blog/2014/08/eric-s-blog/california-fool-s-gold-exploring-glassell-park.html'
sites['watts'] = 'https://www.amoeba.com/blog/2014/02/eric-s-blog/california-fool-s-gold-exploring-watts.html'
sites['lincolnheights2'] = 'https://www.amoeba.com/blog/2012/03/eric-s-blog/california-fool-s-gold-exploring-lincoln-heights-the-pueblo-s-bedroom.html'
sites['montereyhills'] = 'https://www.amoeba.com/blog/2013/12/eric-s-blog/california-fool-s-gold-exploring-monterey-hills.html'
sites['mountwashington2'] = 'https://www.amoeba.com/blog/2012/05/eric-s-blog/california-fool-s-gold-exploring-mount-washington.html'



response = requests.get(site)

soup = BeautifulSoup(response.text, 'html.parser')
img_tags = soup.find_all('img')

urls = [img['src'] for img in img_tags]


for url in urls:
    filename = re.search(r'/([\w_-]+[.](jpg|gif|png))$', url)
    with open(filename.group(1), 'wb') as f:
        if 'http' not in url:
            # sometimes an image source can be relative
            # if it is provide the base url which also happens
            # to be the site variable atm.
            url = '{}{}'.format(site, url)
        response = requests.get(url)
        f.write(response.content)
