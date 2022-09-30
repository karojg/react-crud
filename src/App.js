import React, { useState } from 'react';
import './style.css';
import List from './components/List';
import Form from './components/Form';

export default function App() {
  // TODO: Could use Context API
  // Overkill for quick implementation

  const [data, setData] = useState(getItems());
  const [selectedImage, setSelectedImage] = useState({});
  const [showAdd, setShowAdd] = useState(true);
  const [query, setQuery] = useState('');

  // CRUD Operations
  // New Image => LIFO
  const addImageData = (image) => {
    setData([image, ...data]);
  };

  const deleteImageData = () => {
    setData(data.filter((user) => user.id !== selectedImage.index));
  };

  const updateImageData = (updateImageData) => {
    setData(
      data.map((image) =>
        data.lastIndexOf(image) === selectedImage.index
          ? updateImageData
          : image
      )
    );
  };

  // Could create a modal to display the image CRUD Actions
  // Or could create a tab
  // Prefer to keep the actions close to the images, user wont need to go back to edit another image.

  return (
    <>
      <h2>Nature Images CRUD</h2>
      <div className="wrapper">
        <List
          images={data}
          setSelectedImage={setSelectedImage}
          setShowAdd={setShowAdd}
        />

        <Form
          add={addImageData}
          update={updateImageData}
          delete={deleteImageData}
          selectedImage={selectedImage.value}
          showAdd={showAdd}
        />
      </div>
    </>
  );
}

function getItems() {
  const items = [
    {
      title: 'Alone in the unspoilt wilderness',
      description: 'landscape photography of mountain hit by sun rays',
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      tags: ['nature'],
    },
    {
      title: 'Bridge over a green waterfall',
      description: 'gray concrete bridge and waterfalls during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      tags: ['nature'],
    },
    {
      title: 'Body Grassland in Yili\uff0cXinjiang\uff0cChina',
      description: "bird's eye view photograph of green mountains",
      imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      tags: ['nature'],
    },
    {
      title: 'Taking The Scenic Route',
      description: 'foggy mountain summit',
      imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      tags: ['nature', 'landscape', 'mountain'],
    },
    {
      title: 'Whangarei Falls footbridge',
      description: 'blue and brown steel bridge',
      imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
      tags: ['nature', 'forest', 'tree'],
    },
    {
      title: 'Beautiful woodland path',
      description: 'forest trees',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      tags: ['nature', 'forest'],
    },
    {
      title: 'El Capitan on a sunny afternoon',
      description:
        'landmark photography of trees near rocky mountain under blue skies daytime',
      imageUrl: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
      tags: ['nature'],
    },
    {
      title: 'The Island',
      description: 'silhouette of trees near body of water during sunset',
      imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9',
      tags: ['nature', 'sunset', 'beaver dam'],
    },
    {
      title: 'nature',
      description: 'selective focus photo of green vine',
      imageUrl: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f',
      tags: [],
    },
    {
      title: 'Los Angeles sunset field',
      description: 'selrctive focus of white flowers',
      imageUrl: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6',
      tags: ['nature', 'sunset', 'los angeles'],
    },
    {
      title: 'Hopeful Horizons',
      description: 'trees under cloudy sky during sunset',
      imageUrl: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
      tags: ['nature', 'landscape', 'sunset'],
    },
    {
      title: 'Maldives',
      description: 'body of water on beach shore',
      imageUrl: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e',
      tags: ['sea'],
    },
    {
      title: 'Day\u2019s like this..',
      description: 'silhouette of plant during sunset',
      imageUrl: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6',
      tags: [],
    },
    {
      title: 'White sugar',
      description: 'landscape photography of black mountain',
      imageUrl: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e',
      tags: [],
    },
    {
      title: 'Lake Louise landscape',
      description: 'photo of two mountains',
      imageUrl: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
      tags: ['nature', 'mountain'],
    },
    {
      title: 'Waterfall in Telluride',
      description: 'time lapse photo of falls on forest trees',
      imageUrl: 'https://images.unsplash.com/photo-1455218873509-8097305ee378',
      tags: ['nature', 'wallpaper'],
    },
    {
      title:
        'This is the first photo I am uploading to unsplash.com - I\u2019ve been taking photos actively for the last 15 years, and despite having a vast collection of thousands of images from all parts of the world, I have never really sold any. I love the idea of sharing free images for those who cannot afford to pay for them. I also believe that those who can afford to pay for a photo, and appreciate the efforts of a photographer will be happy to compensate the photographer when they use one for commercial purposes. Here is a free image of a tree - if you use it, please follow my Instagram @niko.photos :)',
      description: 'green leaf tree under blue sky',
      imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      tags: ['nature', 'tree'],
    },
    {
      title: 'Misty shroud over a forest',
      description: 'palm trees covered with fog',
      imageUrl: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5',
      tags: ['nature', 'forest'],
    },
    {
      title: 'Sandstone cliff with a waterfall',
      description: 'landscape photography of brown mountain',
      imageUrl: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c',
      tags: ['nature', 'waterfall', 'wallpaper'],
    },
    {
      title: 'Perched blue and orange bird',
      description: 'selective focus photography of blue kingfisher',
      imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
      tags: ['bird'],
    },
    {
      title: 'warm sunrise on beach',
      description: 'body of water wave photo during golden time',
      imageUrl: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda',
      tags: ['beach'],
    },
    {
      title: 'Without wings I can feel free',
      description:
        'silhouette of person standing on rock surrounded by body of water',
      imageUrl: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94',
      tags: ['people', 'sky'],
    },
    {
      title: 'Sass long, Langkofel, Sasso lungo, Val Gherdeina!',
      description: 'moon near mountain ridge',
      imageUrl: 'https://images.unsplash.com/photo-1546514355-7fdc90ccbd03',
      tags: ['nature', 'wallpaper'],
    },
    {
      title:
        'Ocean Ripple - Buy Print: https://society6.com/product/ripple1982828_print?sku=s6-10781771p4a1v3',
      description: 'body of water under sky',
      imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      tags: ['ocean', 'water', 'sea'],
    },
    {
      title: 'Looking up',
      description: 'low angle photography of trees at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'Boathouse on a mountain lake',
      description: 'boat docked near house',
      imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c',
      tags: [],
    },
    {
      title: 'Blue lake and green shore',
      description: "bird's eye view photography of trees and body of water",
      imageUrl: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1',
      tags: ['nature', 'wallpaper', 'aerial'],
    },
    {
      title: 'Orange sunrise and mountain silhouette',
      description:
        'people on top of hill under white clouds golden hour photography',
      imageUrl: 'https://images.unsplash.com/photo-1484766280341-87861644c80d',
      tags: ['sun', 'sunrise', 'sunset'],
    },
    {
      title: 'Emerald Bay State Park in the Fall',
      description: 'green-leafed trees',
      imageUrl: 'https://images.unsplash.com/photo-1552083375-1447ce886485',
      tags: ['lake tahoe', 'united states'],
    },
    {
      title:
        'This was my first time shooting the sunset and trying to capture that perfect moment. It was comforting to see a row of photographers beside me all trying to capture the same moment, and appreciating the beauty this earth has to offer.',
      description: 'body of water during sunset',
      imageUrl: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165',
      tags: ['nature'],
    },
    {
      title: 'Remote forest path',
      description: 'low angle photo of pine trees',
      imageUrl: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'A Morning in Bali',
      description: 'eagle-eye view photography of brown pathway',
      imageUrl: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33',
      tags: ['nature', 'bali', 'indonesia'],
    },
    {
      title: 'Sunset at Clingmans Dome',
      description: 'silhoutte of mountains during sunset',
      imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
      tags: ['nature'],
    },
    {
      title: 'Finding my roots',
      description: 'sun light passing through green leafed tree',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'Poor mans garden',
      description: 'bokeh photography of person carrying soil',
      imageUrl: 'https://images.unsplash.com/photo-1492496913980-501348b61469',
      tags: ['nature', 'hands', 'garden'],
    },
    {
      title: 'Get lost and discover yourself',
      description: 'aerial view of beach',
      imageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0',
      tags: ['nature'],
    },
    {
      title: 'Sunrise over rocky lake shore',
      description: 'tundra mountain and body of water',
      imageUrl: 'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d',
      tags: [],
    },
    {
      title: 'Yellow petals flower',
      description: 'closeup photo of yellow sunflowers',
      imageUrl: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724',
      tags: ['flower'],
    },
    {
      title:
        'It was a rainy evening and we were far from a place we wanted to reach. When we were close to a viewing point we saw that sun was shining through a tiny crack in the clouds and the whole valley was filled with a golden light. We ran like the Fellowship of the Ring, jumping over tree roots and steps of a staircase to the viewing point. The whole shoot took around three minutes: unpack a camera, set up a tripod, choose and change a lens, compose a frame, focus and shoot. I had enough time to only take four frames with different exposures and the sun had gone.',
      description: 'mountains and tree range during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1490682143684-14369e18dce8',
      tags: ['nature', 'sunset', 'landscape'],
    },
    {
      title: 'Full moon behind the rock and the stars in front of you!',
      description: 'brown mountain at nighttime',
      imageUrl: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc',
      tags: ['nature'],
    },
    {
      title: 'native plants @ South Ural travel',
      description: 'green leaves',
      imageUrl: 'https://images.unsplash.com/photo-1500829243541-74b677fecc30',
      tags: ['nature', 'green', 'plant'],
    },
    {
      title: 'Cattles at Paye Meadows, KPK, Pakistan.',
      description: 'herd of sheep on green grassy hill during cloudy day',
      imageUrl: 'https://images.unsplash.com/photo-1572099606223-6e29045d7de3',
      tags: ['nature', 'pakistan.', 'kpk'],
    },
    {
      title:
        'Not really lost though ;). I took this picture during a hike in Yoho National Park in the late morning.',
      description: 'time-lapse photography of river',
      imageUrl: 'https://images.unsplash.com/photo-1527489377706-5bf97e608852',
      tags: ['nature', 'mountain', 'landscape'],
    },
    {
      title: 'The beauty of nature',
      description: 'green leaf photography',
      imageUrl: 'https://images.unsplash.com/photo-1504198266287-1659872e6590',
      tags: ['plant'],
    },
    {
      title:
        'The last night of a two week stay on the North Shore of Oahu, Hawaii.',
      description: 'seashore during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      tags: ['sea', 'beach'],
    },
    {
      title: 'Impressive bamboo canopy',
      description: 'low-angle photography of green leaf trees at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1420745981456-b95fe23f5753',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'Antelope Canyon',
      description: 'brown cliff',
      imageUrl: 'https://images.unsplash.com/photo-1492724724894-7464c27d0ceb',
      tags: ['nature', 'texture'],
    },
    {
      title: 'follow @kalenemsley on ig',
      description: 'body of water surrounding with trees',
      imageUrl: 'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a',
      tags: ['landscape'],
    },
    {
      title: 'Wet mountain valley',
      description: 'green mountain across body of water',
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      tags: ['nature', 'landscape', 'mountain'],
    },
    {
      title: 'Sunset over a lavender field',
      description: 'lavender field',
      imageUrl: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec',
      tags: ['france'],
    },
    {
      title: 'Lost For Words',
      description: 'aerial view of mountain during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1533387520709-752d83de3630',
      tags: ['nature', 'sunrise', 'sunset'],
    },
    {
      title: 'Minimal eucalyptus leaves',
      description: 'green leaf',
      imageUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91',
      tags: ['plant', 'minimal', 'leaf'],
    },
    {
      title: 'Red\u2019n foggy',
      description: 'aerial view of brown fores and black mountains',
      imageUrl: 'https://images.unsplash.com/photo-1508669232496-137b159c1cdb',
      tags: ['nature', 'mountain', 'autumn'],
    },
    {
      title: 'Sunset over an Australian Beach',
      description: 'view of seashore sunset',
      imageUrl: 'https://images.unsplash.com/photo-1422493757035-1e5e03968f95',
      tags: ['landscape', 'sunset', 'sky'],
    },
    {
      title: 'Dew on rolled-up leaves',
      description: 'closeup photo of green leafed plants',
      imageUrl: 'https://images.unsplash.com/photo-1463107971871-fbac9ddb920f',
      tags: [],
    },
    {
      title: 'Entering heaven, please remove your shoes',
      description: 'trees and plants',
      imageUrl: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e',
      tags: ['nature', 'mist', 'fog'],
    },
    {
      title:
        'Steaming mud pots in the Selt\u00fan area of Iceland. Completely silent apart from the sounds of bubbling water and the wind.',
      description: 'lake near mountain under cloudy sky at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4',
      tags: ['nature', 'landscape', 'lake'],
    },
    {
      title: 'Seceda mountains in Italy. ',
      description: 'green grass and gray rocky mountain during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
      tags: ['nature', 'landscape', 'mountain'],
    },
    {
      title:
        'Check out more of my travels at http://www.instagram.com/simonmigaj',
      description: 'man sitting on gray dock',
      imageUrl: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
      tags: ['travel'],
    },
    {
      title: 'Pfeiffer Beach at Dusk',
      description: 'river overflow in between rock formation',
      imageUrl: 'https://images.unsplash.com/photo-1461301214746-1e109215d6d3',
      tags: ['wallpaper'],
    },
    {
      title:
        'California blooming like crazy after months of non-stop rains. Even deserts are covered with juicy bright flowers. The photo was made on Diamond Valley Lake a few days ago.',
      description: 'orange petaled flowers',
      imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      tags: ['nature', 'flower', 'spring'],
    },
    {
      title: '\u00c9cosse valley and mountains',
      description: 'mountain covered with green grass',
      imageUrl: 'https://images.unsplash.com/photo-1438786657495-640937046d18',
      tags: ['landscape'],
    },
    {
      title: 'Smoky morning in Cascades',
      description: 'pine trees field near mountain under sunset',
      imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title:
        'I had been travelling around Central America, living in a van and sharing experiences with other travelers.  Having just dropped my last travel buddy off I headed back to Lake Atitlan and found an incredible spot to camp right next to the lake.  There was this jetty sticking out into the lake where I sat watching the sunset, once again living the dream on my own. I knew something special was happening there, and now it has become BitcoinLake!',
      description:
        'brown wooden dock between lavender flower field near body of water during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5',
      tags: ['nature', 'landscape', 'guatemala'],
    },
    {
      title: 'Illuminated woods',
      description: 'photography of tall trees at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'Dandelion in the grass',
      description: 'white dandelion closeup photography',
      imageUrl: 'https://images.unsplash.com/photo-1462216589242-9e3e00a47a48',
      tags: ['flower', 'nature', 'plant'],
    },
    {
      title: 'Lavender Sunset',
      description: 'silhouette of grass',
      imageUrl: 'https://images.unsplash.com/photo-1492273840898-6102ad35701e',
      tags: ['nature', 'wisdom tree', 'los angeles'],
    },
    {
      title: 'Ocean',
      description: 'iPhone wallpaper',
      imageUrl: 'https://images.unsplash.com/photo-1513553404607-988bf2703777',
      tags: ['ocean', 'sea'],
    },
    {
      title: 'Waves',
      description: 'seashore',
      imageUrl: 'https://images.unsplash.com/photo-1533371452382-d45a9da51ad9',
      tags: ['magic', 'beach', 'sky'],
    },
    {
      title: 'Color of the lake is so beautiful!',
      description: 'scenery of mountain',
      imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
      tags: ['canada', 'moraine lake', 'mountain'],
    },
    {
      title: 'Pebble tower',
      description: 'stack rock on seashore',
      imageUrl: 'https://images.unsplash.com/photo-1458501534264-7d326fa0ca04',
      tags: ['nature', 'sea', 'rock'],
    },
    {
      title: 'Banff, Canada',
      description: 'body of water and pine trees',
      imageUrl: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28',
      tags: ['nature', 'canada', 'banff'],
    },
    {
      title: 'Into The Horizon',
      description: 'landscape photography of field',
      imageUrl: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab',
      tags: ['landscape'],
    },
    {
      title:
        'Waking up at 5.30 we entered the water just as the sun was rising. Even in a busy place there is always a time when most people are sleeping and you can find a tranquil moment for yourself.',
      description: 'calm body of water during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8',
      tags: ['sea', 'water', 'pink'],
    },
    {
      title:
        '"If people sat outside and looked up at the stars each night, I\u2019ll bet they\u2019d live a lot differently."',
      description: 'landscape photo of brown mountain',
      imageUrl: 'https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10',
      tags: ['nature', 'sky', 'sedona'],
    },
    {
      title: 'Star Night Sky Ravine',
      description: 'blue starry night',
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      tags: ['nature', 'sky', 'wallpaper'],
    },
    {
      title:
        "Two deer in front of Half Dome in Yosemite Valley during sunset.\n\nI spent the evening in Yosemite Valley watching the sun go down on Half Dome when a couple of deer walked toward me. I took the opportunity to take this picture of them before moving out of their way so they could walk away undisturbed. It was a very beautiful experience and one of the best sunsets I've ever witnessed.",
      description: 'two brown deer beside trees and mountain',
      imageUrl: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      tags: ['nature', 'mountain', 'animal'],
    },
    {
      title: 'Pastures at the foot of a mountain',
      description: "bird's eye view of grassland beside mountain",
      imageUrl:
        'https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993',
      tags: ['landscape', 'green'],
    },
    {
      title:
        'i have big interest with plants, the way they grow, their foliage\u2019s unique form. every plant has their uniqueness. This photo is one of my plant\u2019s pattern collection.',
      description: 'palm leaves',
      imageUrl: 'https://images.unsplash.com/photo-1525923838299-2312b60f6d69',
      tags: ['plant'],
    },
    {
      title: 'A Ficus Lyrata Leaf in the sunlight (2/2) (IG: @clay.banks)',
      description: null,
      imageUrl: 'https://images.unsplash.com/photo-1580133318324-f2f76d987dd8',
      tags: ['green', 'texture', 'pattern'],
    },
    {
      title: 'All Rise',
      description:
        'assorted hot air balloons flying at high altitude during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee',
      tags: ['travel'],
    },
    {
      title: 'Paradise',
      description: 'stars overlooking body of water during nighttime',
      imageUrl: 'https://images.unsplash.com/photo-1509515837298-2c67a3933321',
      tags: ['sky', 'night'],
    },
    {
      title: 'waterdrops',
      description: 'shallow focus photography of grass leaf',
      imageUrl: 'https://images.unsplash.com/photo-1496769336828-c522a3a7e33c',
      tags: ['nature', 'green'],
    },
    {
      title: 'Before They\u00b4re Coming',
      description: 'green and brown tree during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1544965850-6f8a66788f9b',
      tags: [],
    },
    {
      title: 'dogwood flower',
      description: 'shallow focus photography of tree with pink flowers',
      imageUrl: 'https://images.unsplash.com/photo-1523528283115-9bf9b1699245',
      tags: ['flower', 'pink'],
    },
    {
      title: 'coming alive',
      description: 'green leaf plants',
      imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
      tags: ['nature', 'plant', 'green'],
    },
    {
      title:
        'I was drawn to theAutumnal colours of the Tree lined drive taking you towards the Castle',
      description: 'road with falling leaves in between of trees',
      imageUrl: 'https://images.unsplash.com/photo-1501261379837-c3b516327829',
      tags: ['autumn'],
    },
    {
      title: 'Indian Lake Park, WI',
      description: 'green trees',
      imageUrl: 'https://images.unsplash.com/photo-1527701963793-33e969bca5ee',
      tags: [],
    },
    {
      title:
        'This photo was taken in the high mountains of Adjara, Georgia, while I was doing my project there. It was summer, but the temperature didn\u2019t feel like it. I spent most of my days standing in front of this amazing view, thinking about the life that was waiting for me back in capital. Suddenly, I  had a very strong desire to talk with the fog. Loudly. Thought it had many stories to tell too.',
      description: 'aerial photo of green trees',
      imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d',
      tags: ['nature', 'tree', 'forest'],
    },
    {
      title: 'Hornet eating flower',
      description: 'shallow focus photography of bee on flower',
      imageUrl: 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239',
      tags: [],
    },
    {
      title: 'Isolated Beauty',
      description: 'pink flowers during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe',
      tags: ['pink', 'flower', 'plant'],
    },
    {
      title: 'Tree-lined alley',
      description: 'gray concrete road top between green trees',
      imageUrl: 'https://images.unsplash.com/photo-1420593248178-d88870618ca0',
      tags: ['nature', 'tree', 'green'],
    },
    {
      title:
        'On a weekend camping trip, we decided to wander up a side path. Expecting to find paddocks, we were met with a golden hour lit hillside, littered with cottontails. Fuzzy and warm from the sun, we spent the following hours lying in the grass taking in the final hour of sun.',
      description: 'brown plant field',
      imageUrl: 'https://images.unsplash.com/photo-1519356162333-4d49ceade668',
      tags: ['nature', 'brown', 'australia'],
    },
    {
      title: 'Valley of Fires',
      description: 'black concrete road surrounded by brown rocks',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      tags: ['road'],
    },
    {
      title: 'Coastline',
      description: 'empty seashore',
      imageUrl: 'https://images.unsplash.com/photo-1503756234508-e32369269deb',
      tags: ['beach'],
    },
    {
      title: 'Pink flowering grass',
      description: 'selective focus photo of pink petaled flowers',
      imageUrl: 'https://images.unsplash.com/photo-1422205512921-12dac7b3b603',
      tags: [],
    },
    {
      title: 'Sapphire haze',
      description: 'mountains',
      imageUrl: 'https://images.unsplash.com/photo-1530569673472-307dc017a82d',
      tags: ['blue'],
    },
    {
      title: 'Tree tunnel',
      description: 'empty street in between of tall trees during golden hour',
      imageUrl: 'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3',
      tags: ['tree', 'forest', 'path'],
    },
    {
      title:
        'It almost seemed unreal, how beautiful the mountains looked during sunset. Almost like a painting. The entire time the sun was setting, we all just were silent and in awe of how beautiful our earth is.',
      description: 'mountains under white mist at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      tags: ['nature', 'landscape', 'mountain'],
    },
    {
      title: 'Sequoia National Park',
      description: 'trees on hill under yellow sky at daytime',
      imageUrl: 'https://images.unsplash.com/photo-1544084944-15269ec7b5a0',
      tags: ['nature', 'mountain', 'sequoia national park'],
    },
    {
      title: 'Beauty summer and spring backgrounds',
      description: 'tree leaves macro photography',
      imageUrl: 'https://images.unsplash.com/photo-1533119408463-b0f487583ff6',
      tags: ['leaf'],
    },
    {
      title:
        'My brother and I hired one of these boats for an hour and paddled around this gorgeous lake. Then a storm rolled in and we were stuck in the middle of the lake with no shelter from the torrential rain. An spontaneous race began between all the boats on the lake as everyone raced back to the dock. I\u2019m proud to say that our boat pulled in first.',
      description: '2 person on boat at lake during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed',
      tags: [],
    },
    {
      title: 'summer 2017',
      description: 'aerial photography of grey and brown mountain',
      imageUrl: 'https://images.unsplash.com/photo-1504870712357-65ea720d6078',
      tags: ['nature', 'landscape', 'mountain'],
    },
    {
      title: 'Pristine water lily',
      description:
        'rule of thirds photography of pink and white lotus flower floating on body of water',
      imageUrl: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541',
      tags: ['flower'],
    },
    {
      title:
        'Imagine you are above the fog. Seeing the sun set. Then you turn around and see this. A mountain summit peaking out of the fog and catching fire. Goosebumps all over your body. And a refreshing feeling of joy and thankfulness filling up your body. This is Switzerland. This I can call my home. I really appreciate that a lot lately.',
      description: 'aerial view of mountain',
      imageUrl: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9',
      tags: [],
    },
    {
      title:
        'I remember seeing a picture like this a long time ago. I knew at that point that I would have to go and experience it for myself one day. After some research, it turns out that if you wait until the end of the Summer the sun sets right at the top of the valley resulting in this magnificent sunset! \r\n\r\nI still feel like the picture doesn\u2019t even do it justice!',
      description: 'aerial view of grass mountains',
      imageUrl: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968',
      tags: [],
    },
    {
      title: 'The most photographed tree in New Zealand. Why? Just look at it!',
      description: 'brown leaf tree at water during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5',
      tags: ['nature', 'new zealand', 'wanaka'],
    },
    {
      title: 'il pontile',
      description: 'photo of brown wooden boardwalk nearby sea',
      imageUrl: 'https://images.unsplash.com/photo-1504803900752-c2051699d0e8',
      tags: ['nature', 'landscape', 'blue'],
    },
    {
      title: 'Foggy pine',
      description: 'green trees covering with fog during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4',
      tags: ['nature'],
    },
    {
      title: 'Forest \u219f',
      description: 'green leafed trees during daytime',
      imageUrl: 'https://images.unsplash.com/photo-1503435824048-a799a3a84bf7',
      tags: [],
    },
    {
      title:
        'On a perfect spring morning Beverley Brook, a small but beautiful river that meanders through London\u2019s Richmond Park, takes on a fairy tail quality in the dawn mist.',
      description: 'river beside trees and grass field',
      imageUrl: 'https://images.unsplash.com/photo-1528184039930-bd03972bd974',
      tags: ['nature', 'landscape', 'london'],
    },
  ];
  return items;
}
