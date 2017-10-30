// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1995-2017",
      text: {
        headline: "MY EDUCATION JOURNEY",
        text: "<p>This is my educational experience, and I'll demonstrate where I started my education and the schools I have attended.</p>"
      },
      media: {
        url: "Education experience.jpeg",
        
        caption: "About my education"
      }
    }, 
    
    {
      date: "1995",
      text: {
        headline: "CHONGQING",
        text: "<p> Chongqing is my hometown and is where I attended primary school and high school. I began school when I was six years old, and my primary school is Shanhu Experimental Primary School. My junior high school is also called Shanhu but they are not the same one, and both of these two schools located in Nan'an District.</p>"
      },
      location: {
        name: "Chongqing",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 29.431586,
        lon: 106.912251,
        zoom: 16,
        line: true
      },
      media: {
        url: "chongqing-travel-guide-bg.jpg",
        type: 		"image",
        credit: "Chongqing",
        caption: "My hometown"
      }
    }, 
    
    {
      date: "2010",
      text: {
        headline: "Chongqing No.11 Middle School",
        text: "<p>My senior high school is called Chongqing No.11 Middle School, which is one of the best high schools in main urban area of Chongqing. Although I wasn't good at exams, I did do well in college entrance examination and got my best grades among the last year.</p> "
      },
      location: {
        name: "Chongqing No.11 Middle School",
        lat: 29.581726,
        lon: 106.596651,
        zoom: 16,
        line: true
      },
      media: {
        url: "shiyizhong.jpg",
        credit: "Chongqing No.11 Middle School",
        caption: "My senior high school"
      }
    },
    
    {
      date: "2013",
      text: {
        headline: "CUC",
        text: "<p>CUC is the abbreviation of Communication University of China,which is one of the Project 211 key universities directly administered by the Ministry of Education of the PRC. best Universities in China. I used to be a student majored in Communication Engineering and I switched my major to Internet and New Media at the end of the first year since I was interested in New Media and thought this area is promising, and I hold this belief till now.</p>"
      },
      location: {
        name: "Communication University of China",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 39.912793,
        lon: 116.556581,
        zoom: 16,
        line: true
      },
      media: {
        url: "CUC.jpg",
        type: 		"image",
        credit: "CUC,Beijing",
        caption: "Communication University of China"
      }
    }, 
  
    {
      date: "2017",
      text: {
        headline: "CUHK",
        text: "<p>CUHK is where I will spend this year for and is the university that I will get my MSc degree from. I know very well that one year flies quickly, so I cherish every minute I study and live here. My parents are so glad and proud that I was admitted by CUHK, so they sent me to here in person and we took a family photo in the front of the landmark of CUHK.</p>"
      },
      location: {
        name: "CUHK",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 22.416263,
        lon: 114.210932,
        zoom: 16,
        line: true
      },
      media: {
        url: "CUHK.jpg",
        type: 		"image",
        credit: "CUHK,HK",
        caption: "The Chinese University of Hong Kong"
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}