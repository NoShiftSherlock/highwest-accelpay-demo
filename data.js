/* High West demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://ship.highwest.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "highwest",
 "brand": "High West",
 "storeName": "High West",
 "orderPrefix": "HIG",
 "catalog": {
  "a-midwinter-nights-dram-act-14": {
   "name": "A Midwinter Night's Dram® Act 14",
   "short": "A Midwinter Night's Dram® Act 14",
   "size": "750ML",
   "tag": "Spirits",
   "price": 12499,
   "image": "assets/p-a-midwinter-nights-dram-act-14.jpg",
   "gallery": [
    "assets/p-a-midwinter-nights-dram-act-14.jpg"
   ],
   "lead": "",
   "specs": "SPIRITS",
   "desc": [
    "A Midwinter Night's Dram Act 14 is the latest annual limited release of High West's beloved Rendezvous Rye, finished in a carefully selected combination of Ruby Port, Tawny Port, and—new for this year—Amontillado, Oloroso, and PX Sherry barrels. To commemorate 20 years of High West , Act 14 expands the brand's signature finishing program by incorporating rare sherry casks alongside the classic port barrel influence. ",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "hw-cask-strength-bourbon": {
   "name": "High West Cask Strength Bourbon '25",
   "short": "High West Cask Strength Bourbon '25",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 6999,
   "image": "assets/p-hw-cask-strength-bourbon.png",
   "gallery": [
    "assets/p-hw-cask-strength-bourbon.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "Introducing High West Cask Strength – a bold, masterfully blended whiskey that captures the rugged spirit of the Utah mountains. This exceptional blend of straight bourbon whiskeys, aged 6–20 years, delivers a sensory journey like no other. On the nose, expect vibrant layers of orange peel, grilled peach cobbler with vanilla ice cream, and white chocolate-covered apricot, rounded out by sarsaparilla and a hint of map",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "high-west-cask-strength-bourbon-24": {
   "name": "High West Cask Strength Whiskey '24",
   "short": "High West Cask Strength Whiskey '24",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 6999,
   "image": "assets/p-high-west-cask-strength-bourbon-24.png",
   "gallery": [
    "assets/p-high-west-cask-strength-bourbon-24.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "Introducing High West Cask Strength – a bold, masterfully blended whiskey that captures the rugged spirit of the Utah mountains. This exceptional blend of straight bourbon and rye whiskeys, aged 6–10 years.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "bottled-in-bond-rye": {
   "name": "Bottled in Bond Straight Rye Whiskey",
   "short": "Bottled in Bond Straight Rye Whiskey",
   "size": "750ML",
   "tag": "American whiskey",
   "price": 6999,
   "image": "assets/p-bottled-in-bond-rye.png",
   "gallery": [
    "assets/p-bottled-in-bond-rye.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "A boldly flavored whiskey treat made with an 80% rye and 20% malted rye mash bill. M ade in accordance with the standards laid out by the Bottled In Bond Act of 1897, it's a whiskey that does everything right. One base spirit, crafted at a single distillery, by a single distiller, in a single distilling season. Must be aged a minimum of 4 years and bottled at 100 proof in a federally bonded warehouse.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "bourbon": {
   "name": "High West Bourbon",
   "short": "High West Bourbon",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 2999,
   "image": "assets/p-bourbon.png",
   "gallery": [
    "assets/p-bourbon.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "High West Bourbon is a complex blend of straight bourbons, producing an aromatic whiskey that helps preserve the West.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "double-rye": {
   "name": "Double Rye",
   "short": "Double Rye",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 2999,
   "image": "assets/p-double-rye.png",
   "gallery": [
    "assets/p-double-rye.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "Our distinctive Double Rye embodies a harmonious balance of bold rye spice with bright botanical notes that simultaneously showcase layers of freshness and complexity. A blend of column and pot-still whiskies, aged a minimum of two years. Curated to highlight the wonderful, bold spice character that comes from high rye whiskies as well as a refreshing botanical brightness. A unique and balanced flavor profile of cinn",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "manhattan-barrel-finished-cocktail": {
   "name": "Manhattan Barrel Finished Cocktail",
   "short": "Manhattan Barrel Finished Cocktail",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 3199,
   "image": "assets/p-manhattan-barrel-finished-cocktail.png",
   "gallery": [
    "assets/p-manhattan-barrel-finished-cocktail.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "A premium pre-batched cocktail, matured in used rye barrels - allowing the flavors to create a rich, smooth, and well-rounded product.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "old-fashioned-barrel-finished-cocktail": {
   "name": "Old Fashioned Barrel Finished Cocktail",
   "short": "Old Fashioned Barrel Finished Cocktail",
   "size": "750ML",
   "tag": "Whiskey",
   "price": 3199,
   "image": "assets/p-old-fashioned-barrel-finished-cocktail.png",
   "gallery": [
    "assets/p-old-fashioned-barrel-finished-cocktail.png"
   ],
   "lead": "",
   "specs": "WHISKEY",
   "desc": [
    "A premium pre-batched cocktail, matured in used rye barrels - allowing the flavors to create a rich, smooth, and well-rounded product.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "a-midwinter-nights-dram-act-14",
  "hw-cask-strength-bourbon",
  "high-west-cask-strength-bourbon-24",
  "bottled-in-bond-rye",
  "bourbon",
  "double-rye",
  "manhattan-barrel-finished-cocktail",
  "old-fashioned-barrel-finished-cocktail"
 ],
 "defaultHandle": "double-rye",
 "retailers": [
  {
   "id": "0eb7905c",
   "name": "Robert Burns Wines",
   "city": "Beverly Hills",
   "st": "CA"
  },
  {
   "id": "02514f40",
   "name": "Robert Burns Liquor Inc.",
   "city": "Beverly Hills",
   "st": "CA"
  },
  {
   "id": "0eb7943d",
   "name": "Beverly Hills Liquor & Wine",
   "city": "Beverly Hills",
   "st": "CA"
  },
  {
   "id": "0eb79bdc",
   "name": "Bobar #2",
   "city": "Corona Del Mar",
   "st": "CA"
  },
  {
   "id": "0eb7a3d0",
   "name": "Vendome Wine & Spirits",
   "city": "Fullerton",
   "st": "CA"
  },
  {
   "id": "0eb79443",
   "name": "Remedy Liquor",
   "city": "Glendale",
   "st": "CA"
  },
  {
   "id": "0eb79eb2",
   "name": "Mega Liquor Warehouse",
   "city": "Hemet",
   "st": "CA"
  },
  {
   "id": "0eb79905",
   "name": "Cork Runner Wine and Spirits",
   "city": "Los Angeles",
   "st": "CA"
  },
  {
   "id": "0eb79b92",
   "name": "Clubhouse Liquor",
   "city": "Palm Desert",
   "st": "CA"
  },
  {
   "id": "0eb7a658",
   "name": "Mission Wine & Spirits - Shipping",
   "city": "Pasadena",
   "st": "CA"
  },
  {
   "id": "9dc5a7bc",
   "name": "Mission Wine & Spirits",
   "city": "Pasadena",
   "st": "CA"
  },
  {
   "id": "0eb7a450",
   "name": "Nestor Liquor",
   "city": "San Diego",
   "st": "CA"
  },
  {
   "id": "a6fa77af",
   "name": "Sip Whiskey",
   "city": "San Diego",
   "st": "CA"
  },
  {
   "id": "0eb7912d",
   "name": "Vista Wine & Spirits",
   "city": "Santee",
   "st": "CA"
  },
  {
   "id": "0eb7959c",
   "name": "Galamart",
   "city": "Sunnyvale",
   "st": "CA"
  },
  {
   "id": "0eb795d2",
   "name": "SoCal Wine & Spirits",
   "city": "Tustin",
   "st": "CA"
  },
  {
   "id": "0eb7934b",
   "name": "Wine & Liquor Depot",
   "city": "Van Nuys",
   "st": "CA"
  },
  {
   "id": "0eb79d0d",
   "name": "The Park Wine and Spirits",
   "city": "Broomfield",
   "st": "CO"
  },
  {
   "id": "0eb799a2",
   "name": "Barnes Liquors",
   "city": "Colorado Springs",
   "st": "CO"
  },
  {
   "id": "0eb7980b",
   "name": "Pecos Wine & Spirits",
   "city": "Denver",
   "st": "CO"
  },
  {
   "id": "4db05ed7",
   "name": "Mayfair Liquors",
   "city": "Denver",
   "st": "CO"
  },
  {
   "id": "0eb79947",
   "name": "C&C Liquor",
   "city": "Fort Collins",
   "st": "CO"
  },
  {
   "id": "0eb7a554",
   "name": "Valley Wines",
   "city": "Farmington",
   "st": "CT"
  },
  {
   "id": "0eb79ee4",
   "name": "Bruce Park Liquors",
   "city": "Greenwich",
   "st": "CT"
  },
  {
   "id": "0eb796b7",
   "name": "Beverage Boss",
   "city": "New Haven",
   "st": "CT"
  },
  {
   "id": "0eb79822",
   "name": "Black Bear Wines & Spirits of Norwalk",
   "city": "Norwalk",
   "st": "CT"
  },
  {
   "id": "0eb79843",
   "name": "Amazing Grapes Wine & Spirits Norwich",
   "city": "Norwich",
   "st": "CT"
  },
  {
   "id": "0eb79821",
   "name": "Black Bear Wines & Spirits",
   "city": "Westport",
   "st": "CT"
  },
  {
   "id": "0eb790a7",
   "name": "1 West Dupont Wine & Liquors",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb79b80",
   "name": "Exotic Wine & Liquors",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb793f3",
   "name": "Barmy Wines and Liquor",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb79ef6",
   "name": "Classy Corks Wine & Spirits",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb7a60d",
   "name": "Sip Wine and Spirits",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb797e2",
   "name": "Hop Cask & Barrel",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb7a4a3",
   "name": "Sherry's Wine & Spirits",
   "city": "Washington",
   "st": "DC"
  },
  {
   "id": "0eb79f9a",
   "name": "The Bottle House",
   "city": "Washington DC",
   "st": "DC"
  },
  {
   "id": "0eb7a2d5",
   "name": "Exotic Wine & Spirits",
   "city": "Washington DC",
   "st": "DC"
  },
  {
   "id": "0eb7909a",
   "name": "Metro Wine & Spirits",
   "city": "Washington DC",
   "st": "DC"
  },
  {
   "id": "0eb79c34",
   "name": "Primo Liquors & Fine Wine",
   "city": "Fort Lauderdale",
   "st": "FL"
  },
  {
   "id": "0eb79d27",
   "name": "Universal Fine Wine & Spirits - Shipping",
   "city": "Holiday",
   "st": "FL"
  },
  {
   "id": "0eb798f5",
   "name": "Nick & Moes Liquor",
   "city": "Lakeland",
   "st": "FL"
  },
  {
   "id": "0eb79a35",
   "name": "Liquor Warehouse",
   "city": "Leesburg",
   "st": "FL"
  },
  {
   "id": "0eb79fc9",
   "name": "Michael's Liquor",
   "city": "Melbourne",
   "st": "FL"
  },
  {
   "id": "0eb79e64",
   "name": "K&D Liquor",
   "city": "Merritt Island",
   "st": "FL"
  },
  {
   "id": "0eb795de",
   "name": "Vintage Liquor - Brickell",
   "city": "Miami",
   "st": "FL"
  },
  {
   "id": "0eb795dd",
   "name": "Vintage Liquor - Midtown",
   "city": "Miami",
   "st": "FL"
  },
  {
   "id": "0eb7a532",
   "name": "West Kendall Liquors & Wines",
   "city": "Miami",
   "st": "FL"
  },
  {
   "id": "d615a674",
   "name": "Pat's Liquor",
   "city": "Oviedo",
   "st": "FL"
  },
  {
   "id": "0eb79f26",
   "name": "Lakeside Food Wine & Spirits 2",
   "city": "Chicago",
   "st": "IL"
  },
  {
   "id": "0eb7a379",
   "name": "Mike's Liquor - Grayslake",
   "city": "Grayslake",
   "st": "IL"
  },
  {
   "id": "0eb79daf",
   "name": "Falcon Food & Liquor",
   "city": "Lockport",
   "st": "IL"
  },
  {
   "id": "0eb7a321",
   "name": "Liquor Barn",
   "city": "Wheeling",
   "st": "IL"
  },
  {
   "id": "0eb7a5a8",
   "name": "Georgio's Liquors - Billerica",
   "city": "Billerica",
   "st": "MA"
  },
  {
   "id": "0eb7a2c0",
   "name": "Gordon's Fine Wines & Liquors",
   "city": "Waltham",
   "st": "MA"
  },
  {
   "id": "0eb7a5a7",
   "name": "Georgio's Liquors - Waltham",
   "city": "Waltham",
   "st": "MA"
  },
  {
   "id": "0eb79521",
   "name": "Wine Underground",
   "city": "Baltimore",
   "st": "MD"
  },
  {
   "id": "0eb79fe9",
   "name": "Norman's Liquors",
   "city": "Essex",
   "st": "MD"
  },
  {
   "id": "0eb7a642",
   "name": "Barrel & Vine",
   "city": "Owings Mills",
   "st": "MD"
  },
  {
   "id": "0eb79f6d",
   "name": "Euro Liquors",
   "city": "Owings Mills",
   "st": "MD"
  },
  {
   "id": "0eb7a4f0",
   "name": "Speedy Liquors",
   "city": "Parkville",
   "st": "MD"
  },
  {
   "id": "0eb7a594",
   "name": "Northwest Fine Wines, Spirits & More",
   "city": "Reisterstown",
   "st": "MD"
  },
  {
   "id": "0eb79e27",
   "name": "Uptown Liquors",
   "city": "Towson",
   "st": "MD"
  },
  {
   "id": "0eb79f53",
   "name": "Mount Royal Bottle Shoppe",
   "city": "Duluth",
   "st": "MN"
  },
  {
   "id": "0eb796e4",
   "name": "Atomic Liquors",
   "city": "Eagan",
   "st": "MN"
  },
  {
   "id": "0eb798db",
   "name": "Mac's Liquor",
   "city": "Hopkins",
   "st": "MN"
  },
  {
   "id": "d615a67b",
   "name": "Gary's Wine & Marketplace - Bernardsville",
   "city": "Bernardsville",
   "st": "NJ"
  },
  {
   "id": "0eb79572",
   "name": "Communipaw Liquor",
   "city": "Jersey City",
   "st": "NJ"
  },
  {
   "id": "0eb7a2e1",
   "name": "Aivan Liquor",
   "city": "Jersey City",
   "st": "NJ"
  },
  {
   "id": "0eb7a392",
   "name": "The Wine Rack - Millburn",
   "city": "Millburn",
   "st": "NJ"
  },
  {
   "id": "0eb7a31b",
   "name": "Ridgefield Park Liquor and Deli",
   "city": "Ridgefield Park",
   "st": "NJ"
  },
  {
   "id": "0eb7a3ef",
   "name": "Bottle Republic",
   "city": "Somerset",
   "st": "NJ"
  },
  {
   "id": "0eb79ea0",
   "name": "Quick Shop Deli and Liquors",
   "city": "West Orange",
   "st": "NJ"
  },
  {
   "id": "0eb7982f",
   "name": "Carmelo's Wine & Liquor",
   "city": "Astoria",
   "st": "NY"
  },
  {
   "id": "0eb795c8",
   "name": "Bedford Wines & Spirits",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb7984d",
   "name": "Peppino's Liquors & Wines",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb7928c",
   "name": "Grape Hill Liquors",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb79400",
   "name": "Z & J Wine & Liquors",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb79280",
   "name": "Bensonhurst Liquors",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb79729",
   "name": "L&P Wines & Liquors",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb79fdf",
   "name": "Kent Wines & Liquors",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb790b1",
   "name": "G & I Wine & Spirits",
   "city": "Brooklyn",
   "st": "NY"
  },
  {
   "id": "0eb7a4be",
   "name": "New York Liquor Co.",
   "city": "Larchmont",
   "st": "NY"
  },
  {
   "id": "0eb797be",
   "name": "Delancey Wine",
   "city": "NYC",
   "st": "NY"
  },
  {
   "id": "0eb79df4",
   "name": "The Wine Market of New Hyde Park",
   "city": "New Hyde Park",
   "st": "NY"
  },
  {
   "id": "0eb79a9d",
   "name": "Wine & Liquor Depot (NY)",
   "city": "New Rochelle",
   "st": "NY"
  },
  {
   "id": "0eb7a34c",
   "name": "Wine and Spirits Discount Warehouse (New Rochelle) - Shipping",
   "city": "New Rochelle",
   "st": "NY"
  },
  {
   "id": "0eb78ff6",
   "name": "Urban Artisanal Wines & Craft Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79a1d",
   "name": "3rd Ave Wine & Liquor Supermarket",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb7968d",
   "name": "North Village Wine & Liquor",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79379",
   "name": "B&S Zeeman Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb793ec",
   "name": "International Wines & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79ea9",
   "name": "Cork & Barrel NYC",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb7912c",
   "name": "Mashbill Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79e39",
   "name": "Park East Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb78ffc",
   "name": "The Wine Hut",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79654",
   "name": "Crossroads Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb7936d",
   "name": "Michael Towne Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79293",
   "name": "Corks on Columbus",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79614",
   "name": "New Westlane Wines & Liquors",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "d615a676",
   "name": "The Manor House Cellar",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79023",
   "name": "Columbus Avenue Wines & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79762",
   "name": "St Marks Wine & Liquor",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb795b9",
   "name": "Central Perk Wine & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb793e6",
   "name": "Times Square Wine & Liquor",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb78fd0",
   "name": "Wine on Nine",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb796aa",
   "name": "21st & Vine Wine & Liquor",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb790c5",
   "name": "Oak and Barrel",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb797d9",
   "name": "AC Wines & Liquors",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb79017",
   "name": "Vintage Grape Wines & Spirits",
   "city": "New York",
   "st": "NY"
  },
  {
   "id": "0eb798a2",
   "name": "Broadway Liquor",
   "city": "Newburgh",
   "st": "NY"
  },
  {
   "id": "0eb79c1e",
   "name": "333 Mainstreet Wine & Liquors",
   "city": "Patchogue",
   "st": "NY"
  },
  {
   "id": "0eb7a2b1",
   "name": "Dry Harbor Wine & Liquors",
   "city": "Queens",
   "st": "NY"
  },
  {
   "id": "0eb79444",
   "name": "Remedy NY",
   "city": "Queens",
   "st": "NY"
  },
  {
   "id": "0eb799f2",
   "name": "GPK Wine & Liquor",
   "city": "Ridgewood",
   "st": "NY"
  },
  {
   "id": "0eb79d85",
   "name": "VIP Liquor & Wines",
   "city": "Staten Island",
   "st": "NY"
  },
  {
   "id": "0eb7a3a6",
   "name": "On The Rocks Wine & Liquors",
   "city": "Sunset Park",
   "st": "NY"
  },
  {
   "id": "713f8b21",
   "name": "Grand Wine Cellar",
   "city": "Syosset",
   "st": "NY"
  },
  {
   "id": "0eb7a3cb",
   "name": "Tonawanda Wine & Liquor",
   "city": "Tonawanda",
   "st": "NY"
  },
  {
   "id": "0eb7988e",
   "name": "Neighbors Wines & Spirits",
   "city": "Wantagh",
   "st": "NY"
  },
  {
   "id": "0eb794e2",
   "name": "Buster's Liquors & Wines",
   "city": "Memphis",
   "st": "TN"
  },
  {
   "id": "0eb7a00c",
   "name": "Specs 128",
   "city": "Addison",
   "st": "TX"
  },
  {
   "id": "0eb7a024",
   "name": "Specs 17",
   "city": "Allen",
   "st": "TX"
  },
  {
   "id": "0eb79cf8",
   "name": "Empire Liquor - Allen",
   "city": "Allen",
   "st": "TX"
  },
  {
   "id": "0eb7a06b",
   "name": "Specs 108",
   "city": "Angleton",
   "st": "TX"
  },
  {
   "id": "0eb7a092",
   "name": "Specs 165",
   "city": "Arlington",
   "st": "TX"
  },
  {
   "id": "0eb7a007",
   "name": "Specs 22",
   "city": "Atascocita",
   "st": "TX"
  },
  {
   "id": "0eb7a056",
   "name": "Specs 77",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a015",
   "name": "Specs 61",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a047",
   "name": "Specs 60",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a045",
   "name": "Specs 58",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a048",
   "name": "Specs 62",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a02a",
   "name": "Specs 27",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a04a",
   "name": "Specs 64",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7912e",
   "name": "Longhorn Wine and Spirits",
   "city": "Austin",
   "st": "TX"
  },
  {
   "id": "0eb7a034",
   "name": "Specs 38",
   "city": "Bastrop",
   "st": "TX"
  },
  {
   "id": "0eb7a099",
   "name": "Specs 172",
   "city": "Bay City",
   "st": "TX"
  },
  {
   "id": "0eb7a032",
   "name": "Specs 36",
   "city": "Baytown",
   "st": "TX"
  },
  {
   "id": "0eb7a02e",
   "name": "Specs 31",
   "city": "Beaumont",
   "st": "TX"
  },
  {
   "id": "0eb7a0bc",
   "name": "Specs 211",
   "city": "Bedford",
   "st": "TX"
  },
  {
   "id": "0eb7a04b",
   "name": "Specs 65",
   "city": "Bee Cave",
   "st": "TX"
  },
  {
   "id": "0eb7a085",
   "name": "Specs 144",
   "city": "Big Sandy",
   "st": "TX"
  },
  {
   "id": "0eb7a0b5",
   "name": "Specs 207",
   "city": "Boerne",
   "st": "TX"
  },
  {
   "id": "0eb7a062",
   "name": "Specs 93",
   "city": "Brenham",
   "st": "TX"
  },
  {
   "id": "0eb7a07e",
   "name": "Specs 134",
   "city": "Brownsville",
   "st": "TX"
  },
  {
   "id": "0eb7a0bd",
   "name": "Specs 217",
   "city": "Brownsville",
   "st": "TX"
  },
  {
   "id": "0eb7a074",
   "name": "Specs 118",
   "city": "Brownsville",
   "st": "TX"
  },
  {
   "id": "0eb7a0a8",
   "name": "Specs 191",
   "city": "Cedar Hill",
   "st": "TX"
  },
  {
   "id": "0eb7a09f",
   "name": "Specs 179",
   "city": "Cedar Park",
   "st": "TX"
  },
  {
   "id": "0eb7a02f",
   "name": "Specs 32",
   "city": "Clear Lake",
   "st": "TX"
  },
  {
   "id": "0eb7a083",
   "name": "Specs 142",
   "city": "Coffee City",
   "st": "TX"
  },
  {
   "id": "0eb7a033",
   "name": "Specs 37",
   "city": "College Station",
   "st": "TX"
  },
  {
   "id": "0eb7a044",
   "name": "Specs 57",
   "city": "College Station",
   "st": "TX"
  },
  {
   "id": "0eb7a01b",
   "name": "Specs 7",
   "city": "College Station",
   "st": "TX"
  },
  {
   "id": "0eb7a02d",
   "name": "Specs 30",
   "city": "Conroe",
   "st": "TX"
  },
  {
   "id": "0eb7a06c",
   "name": "Specs 109",
   "city": "Conroe",
   "st": "TX"
  },
  {
   "id": "0eb7a030",
   "name": "Specs 33",
   "city": "Conroe",
   "st": "TX"
  },
  {
   "id": "0eb7a031",
   "name": "Specs 34",
   "city": "Conroe",
   "st": "TX"
  },
  {
   "id": "0eb7a0c8",
   "name": "Specs 87",
   "city": "Corpus Christi",
   "st": "TX"
  },
  {
   "id": "0eb7a05d",
   "name": "Specs 85",
   "city": "Corpus Christi",
   "st": "TX"
  },
  {
   "id": "0eb7a05b",
   "name": "Specs 83",
   "city": "Corpus Christi",
   "st": "TX"
  },
  {
   "id": "0eb7a04e",
   "name": "Specs 68",
   "city": "Corpus Christi",
   "st": "TX"
  },
  {
   "id": "0eb7a05e",
   "name": "Specs 86",
   "city": "Corpus Christi",
   "st": "TX"
  },
  {
   "id": "0eb7a08a",
   "name": "Specs 149",
   "city": "Cuney",
   "st": "TX"
  },
  {
   "id": "0eb7a03d",
   "name": "Specs 48",
   "city": "Cypress",
   "st": "TX"
  },
  {
   "id": "0eb7a042",
   "name": "Specs 55",
   "city": "Cypress",
   "st": "TX"
  },
  {
   "id": "0eb7a072",
   "name": "Specs 115",
   "city": "Dallas",
   "st": "TX"
  },
  {
   "id": "0eb7a012",
   "name": "Specs 152",
   "city": "Dallas",
   "st": "TX"
  },
  {
   "id": "0eb7a00b",
   "name": "Specs 150",
   "city": "Dallas",
   "st": "TX"
  },
  {
   "id": "0eb7a08d",
   "name": "Specs 156",
   "city": "Dallas",
   "st": "TX"
  },
  {
   "id": "0eb7a079",
   "name": "Specs 127",
   "city": "Dalworthington Gardens",
   "st": "TX"
  },
  {
   "id": "0eb7a077",
   "name": "Specs 123",
   "city": "Denton",
   "st": "TX"
  },
  {
   "id": "0eb7a063",
   "name": "Specs 94",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a068",
   "name": "Specs 105",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a0b6",
   "name": "Specs 208",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a05c",
   "name": "Specs 84",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a0c4",
   "name": "Specs 180",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a0b3",
   "name": "Specs 205",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a0b4",
   "name": "Specs 206",
   "city": "El Paso",
   "st": "TX"
  },
  {
   "id": "0eb7a055",
   "name": "Specs 76",
   "city": "Elgin",
   "st": "TX"
  },
  {
   "id": "0eb7a097",
   "name": "Specs 170",
   "city": "Euless",
   "st": "TX"
  },
  {
   "id": "0eb7a0b1",
   "name": "Specs 203",
   "city": "Fate",
   "st": "TX"
  },
  {
   "id": "0eb7a08e",
   "name": "Specs 158",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a08c",
   "name": "Specs 155",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "bddf5883",
   "name": "Specs 223",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a014",
   "name": "Specs 154",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a00d",
   "name": "Specs 160",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a09e",
   "name": "Specs 178",
   "city": "Fort Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a005",
   "name": "Specs 35",
   "city": "Gavelston",
   "st": "TX"
  },
  {
   "id": "0eb7a064",
   "name": "Specs 95",
   "city": "Georgetown",
   "st": "TX"
  },
  {
   "id": "0eb7a0c9",
   "name": "Specs 193",
   "city": "Giddings",
   "st": "TX"
  },
  {
   "id": "0eb7a091",
   "name": "Specs 164",
   "city": "Granbury",
   "st": "TX"
  },
  {
   "id": "0eb7a0b0",
   "name": "Specs 202",
   "city": "Grand Prairie",
   "st": "TX"
  },
  {
   "id": "0eb7a0ce",
   "name": "Specs 218",
   "city": "Grand Prairie",
   "st": "TX"
  },
  {
   "id": "0eb7a0c5",
   "name": "Specs 214",
   "city": "Greenville",
   "st": "TX"
  },
  {
   "id": "0eb7a0c2",
   "name": "Specs 119",
   "city": "Harlingen",
   "st": "TX"
  },
  {
   "id": "0eb7a07c",
   "name": "Specs 132",
   "city": "Harlingen",
   "st": "TX"
  },
  {
   "id": "0eb7a0c7",
   "name": "Specs 24",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a008",
   "name": "Specs 2",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb79a50",
   "name": "Sharpstown Liquor",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a03e",
   "name": "Specs 49",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a01d",
   "name": "Specs 9",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a021",
   "name": "Specs 13",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a001",
   "name": "Specs 0",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a05a",
   "name": "Specs 82",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a050",
   "name": "Specs 71",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a009",
   "name": "Specs 189",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a05f",
   "name": "Specs 88",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a03a",
   "name": "Specs 45",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a028",
   "name": "Specs 23",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a043",
   "name": "Specs 56",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a036",
   "name": "Specs 40",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a0cf",
   "name": "Specs 222",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a01a",
   "name": "Specs 6",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a018",
   "name": "Specs 4",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a020",
   "name": "Specs 12",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a03b",
   "name": "Specs 46",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a046",
   "name": "Specs 59",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb790d2",
   "name": "The Liquor Store #5",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7950e",
   "name": "Premier Fine Wine & Spirits",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a019",
   "name": "Specs 5",
   "city": "Houston",
   "st": "TX"
  },
  {
   "id": "0eb7a0ae",
   "name": "Specs 200",
   "city": "Humble",
   "st": "TX"
  },
  {
   "id": "0eb7a039",
   "name": "Specs 44",
   "city": "Hunstville",
   "st": "TX"
  },
  {
   "id": "0eb7a0b2",
   "name": "Specs 204",
   "city": "Hurst",
   "st": "TX"
  },
  {
   "id": "0eb7a0b9",
   "name": "Specs 213",
   "city": "Irving",
   "st": "TX"
  },
  {
   "id": "0eb7a006",
   "name": "Specs 19",
   "city": "Jersey Village",
   "st": "TX"
  },
  {
   "id": "0eb7a093",
   "name": "Specs 166",
   "city": "Katy",
   "st": "TX"
  },
  {
   "id": "0eb7a00a",
   "name": "Specs 139",
   "city": "Katy",
   "st": "TX"
  },
  {
   "id": "0eb7a0b7",
   "name": "Specs 209",
   "city": "Keller",
   "st": "TX"
  },
  {
   "id": "0eb7a053",
   "name": "Specs 74",
   "city": "Kerrville",
   "st": "TX"
  },
  {
   "id": "0eb7a089",
   "name": "Specs 148",
   "city": "Kilgore",
   "st": "TX"
  },
  {
   "id": "0eb7a054",
   "name": "Specs 75",
   "city": "Killeen",
   "st": "TX"
  },
  {
   "id": "0eb7a016",
   "name": "Specs 1",
   "city": "Kingwood",
   "st": "TX"
  },
  {
   "id": "0eb7a0af",
   "name": "Specs 201",
   "city": "La Porte",
   "st": "TX"
  },
  {
   "id": "0eb7a0c3",
   "name": "Specs 125",
   "city": "Lake Worth",
   "st": "TX"
  },
  {
   "id": "0eb7a0ba",
   "name": "Specs 215",
   "city": "Laredo",
   "st": "TX"
  },
  {
   "id": "0eb7a07f",
   "name": "Specs 135",
   "city": "Laredo",
   "st": "TX"
  },
  {
   "id": "bddf5884",
   "name": "Specs 225",
   "city": "Lavon",
   "st": "TX"
  },
  {
   "id": "0eb7a023",
   "name": "Specs 16",
   "city": "League City",
   "st": "TX"
  },
  {
   "id": "0eb7a094",
   "name": "Specs 167",
   "city": "Lewisville",
   "st": "TX"
  },
  {
   "id": "0eb7a095",
   "name": "Specs 168",
   "city": "Little Elm",
   "st": "TX"
  },
  {
   "id": "0eb7a04f",
   "name": "Specs 69",
   "city": "Live Oak",
   "st": "TX"
  },
  {
   "id": "0eb7a0bb",
   "name": "Specs 216",
   "city": "Lubbock",
   "st": "TX"
  },
  {
   "id": "0eb7a06a",
   "name": "Specs 107",
   "city": "Lubbock",
   "st": "TX"
  },
  {
   "id": "0eb7a06f",
   "name": "Specs 112",
   "city": "Marble Falls",
   "st": "TX"
  },
  {
   "id": "0eb7a076",
   "name": "Specs 122",
   "city": "McAllen",
   "st": "TX"
  },
  {
   "id": "0eb7a080",
   "name": "Specs 136",
   "city": "McAllen",
   "st": "TX"
  },
  {
   "id": "0eb7a0c1",
   "name": "Specs 78",
   "city": "McAllen",
   "st": "TX"
  },
  {
   "id": "0eb7a078",
   "name": "Specs 126",
   "city": "McAllen",
   "st": "TX"
  },
  {
   "id": "0eb7a08b",
   "name": "Specs 153",
   "city": "McKinney",
   "st": "TX"
  },
  {
   "id": "0eb7a08f",
   "name": "Specs 161",
   "city": "McKinney",
   "st": "TX"
  },
  {
   "id": "0eb7a09c",
   "name": "Specs 176",
   "city": "Missouri City",
   "st": "TX"
  },
  {
   "id": "0eb7a0b8",
   "name": "Specs 210",
   "city": "Nacodoches",
   "st": "TX"
  },
  {
   "id": "0eb7a06e",
   "name": "Specs 111",
   "city": "New Braunfels",
   "st": "TX"
  },
  {
   "id": "0eb7a069",
   "name": "Specs 106",
   "city": "New Braunfels",
   "st": "TX"
  },
  {
   "id": "0eb7a0ad",
   "name": "Specs 199",
   "city": "Pasadena",
   "st": "TX"
  },
  {
   "id": "0eb7a0be",
   "name": "Specs 219",
   "city": "Pearland",
   "st": "TX"
  },
  {
   "id": "0eb7a0cc",
   "name": "Specs 221",
   "city": "Pflugerville",
   "st": "TX"
  },
  {
   "id": "0eb7a3db",
   "name": "Dany's Liquor",
   "city": "Pflugerville",
   "st": "TX"
  },
  {
   "id": "0eb7a07a",
   "name": "Specs 130",
   "city": "Pharr",
   "st": "TX"
  },
  {
   "id": "0eb7a00f",
   "name": "Specs 141",
   "city": "Plano",
   "st": "TX"
  },
  {
   "id": "0eb7a00e",
   "name": "Specs 151",
   "city": "Plano",
   "st": "TX"
  },
  {
   "id": "0eb7a0bf",
   "name": "Specs 190",
   "city": "Plano",
   "st": "TX"
  },
  {
   "id": "0eb7a010",
   "name": "Specs 157",
   "city": "Plano",
   "st": "TX"
  },
  {
   "id": "0eb7a0cd",
   "name": "Specs 212",
   "city": "Plano",
   "st": "TX"
  },
  {
   "id": "0eb7a07b",
   "name": "Specs 131",
   "city": "Port Isabel",
   "st": "TX"
  },
  {
   "id": "0eb7a0a9",
   "name": "Specs 192",
   "city": "Porter",
   "st": "TX"
  },
  {
   "id": "0eb7a0c0",
   "name": "Specs 102",
   "city": "Portland",
   "st": "TX"
  },
  {
   "id": "0eb7a0ca",
   "name": "Specs 138",
   "city": "Prosper",
   "st": "TX"
  },
  {
   "id": "0eb79a44",
   "name": "1464 Liquor",
   "city": "Richmond",
   "st": "TX"
  },
  {
   "id": "0eb7a082",
   "name": "Specs 140",
   "city": "Richmond",
   "st": "TX"
  },
  {
   "id": "0eb7a035",
   "name": "Specs 39",
   "city": "Rosenberg",
   "st": "TX"
  },
  {
   "id": "0eb7a049",
   "name": "Specs 63",
   "city": "Round Rock",
   "st": "TX"
  },
  {
   "id": "0eb7a09b",
   "name": "Specs 174",
   "city": "Rowlett",
   "st": "TX"
  },
  {
   "id": "0eb7a087",
   "name": "Specs 146",
   "city": "Rusk",
   "st": "TX"
  },
  {
   "id": "0eb7a011",
   "name": "Specs 175",
   "city": "Sachse",
   "st": "TX"
  },
  {
   "id": "0eb7a096",
   "name": "Specs 169",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a065",
   "name": "Specs 100",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a06d",
   "name": "Specs 110",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a0a7",
   "name": "Specs 188",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a098",
   "name": "Specs 171",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a0aa",
   "name": "Specs 194",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a070",
   "name": "Specs 113",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a0ac",
   "name": "Specs 197",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb79f5f",
   "name": "Alamo City Liquors",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a0d0",
   "name": "Specs 98",
   "city": "San Antonio",
   "st": "TX"
  },
  {
   "id": "0eb7a071",
   "name": "Specs 114",
   "city": "San Marcos",
   "st": "TX"
  },
  {
   "id": "0eb7a084",
   "name": "Specs 143",
   "city": "Sherman",
   "st": "TX"
  },
  {
   "id": "0eb7a09a",
   "name": "Specs 173",
   "city": "South Padre Island",
   "st": "TX"
  },
  {
   "id": "0eb7a07d",
   "name": "Specs 133",
   "city": "South Padre Island",
   "st": "TX"
  },
  {
   "id": "0eb7a060",
   "name": "Specs 89",
   "city": "Spring",
   "st": "TX"
  },
  {
   "id": "0eb7a0a5",
   "name": "Specs 186",
   "city": "Spring",
   "st": "TX"
  },
  {
   "id": "0eb7a004",
   "name": "Specs 15",
   "city": "Spring",
   "st": "TX"
  },
  {
   "id": "0eb7a022",
   "name": "Specs 14",
   "city": "Spring",
   "st": "TX"
  },
  {
   "id": "0eb7a02b",
   "name": "Specs 28",
   "city": "Spring",
   "st": "TX"
  },
  {
   "id": "0eb7a002",
   "name": "Specs 53",
   "city": "Spring Valley Village",
   "st": "TX"
  },
  {
   "id": "0eb7a0c6",
   "name": "Specs 220",
   "city": "Stephenville",
   "st": "TX"
  },
  {
   "id": "0eb79445",
   "name": "Remedy TX",
   "city": "Sugar Land",
   "st": "TX"
  },
  {
   "id": "0eb7a017",
   "name": "Specs 3",
   "city": "Sugar Land",
   "st": "TX"
  },
  {
   "id": "0eb79c79",
   "name": "Angel Liquor",
   "city": "Sugar Land",
   "st": "TX"
  },
  {
   "id": "0eb7a04c",
   "name": "Specs 66",
   "city": "Temple",
   "st": "TX"
  },
  {
   "id": "0eb7a0a6",
   "name": "Specs 187",
   "city": "Terrell",
   "st": "TX"
  },
  {
   "id": "0eb7a090",
   "name": "Specs 163",
   "city": "The Colony",
   "st": "TX"
  },
  {
   "id": "0eb7a02c",
   "name": "Specs 29",
   "city": "The Woodlands",
   "st": "TX"
  },
  {
   "id": "0eb7a003",
   "name": "Specs 124",
   "city": "Tomball",
   "st": "TX"
  },
  {
   "id": "0eb7a086",
   "name": "Specs 145",
   "city": "Troup",
   "st": "TX"
  },
  {
   "id": "0eb7a04d",
   "name": "Specs 67",
   "city": "Victoria",
   "st": "TX"
  },
  {
   "id": "0eb7a052",
   "name": "Specs 73",
   "city": "Waco",
   "st": "TX"
  },
  {
   "id": "0eb7a0cb",
   "name": "Specs 103",
   "city": "Waco",
   "st": "TX"
  },
  {
   "id": "0eb7a0ab",
   "name": "Specs 195",
   "city": "Weatherford",
   "st": "TX"
  },
  {
   "id": "0eb7a040",
   "name": "Specs 52",
   "city": "Webster",
   "st": "TX"
  },
  {
   "id": "0eb7a081",
   "name": "Specs 137",
   "city": "Weslaco",
   "st": "TX"
  },
  {
   "id": "0eb7a073",
   "name": "Specs 116",
   "city": "Westlake",
   "st": "TX"
  },
  {
   "id": "0eb7a058",
   "name": "Specs 80",
   "city": "Wichita Falls",
   "st": "TX"
  },
  {
   "id": "0eb7a029",
   "name": "Specs 25",
   "city": "Willis",
   "st": "TX"
  },
  {
   "id": "0eb7a0a0",
   "name": "Specs 181",
   "city": "Wollforth",
   "st": "TX"
  }
 ],
 "realHandles": [
  "double-rye",
  "bourbon"
 ],
 "gopuff": {
  "zips": {
   "07080": "New Brunswick, NJ",
   "08816": "New Brunswick, NJ",
   "08817": "New Brunswick, NJ",
   "08823": "New Brunswick, NJ",
   "08824": "New Brunswick, NJ",
   "08837": "New Brunswick, NJ",
   "08840": "New Brunswick, NJ",
   "08850": "New Brunswick, NJ",
   "08852": "New Brunswick, NJ",
   "08854": "New Brunswick, NJ",
   "08873": "New Brunswick, NJ",
   "08901": "New Brunswick, NJ",
   "08902": "New Brunswick, NJ",
   "08904": "New Brunswick, NJ",
   "68502": "Lincoln, NE",
   "68503": "Lincoln, NE",
   "68504": "Lincoln, NE",
   "68505": "Lincoln, NE",
   "68506": "Lincoln, NE",
   "68507": "Lincoln, NE",
   "68508": "Lincoln, NE",
   "68510": "Lincoln, NE",
   "68512": "Lincoln, NE",
   "68516": "Lincoln, NE",
   "68521": "Lincoln, NE",
   "68522": "Lincoln, NE",
   "68523": "Lincoln, NE",
   "68524": "Lincoln, NE",
   "68528": "Lincoln, NE",
   "68531": "Lincoln, NE",
   "68532": "Lincoln, NE",
   "68583": "Lincoln, NE",
   "68588": "Lincoln, NE",
   "32765": "Orlando, FL",
   "32766": "Orlando, FL",
   "32792": "Orlando, FL",
   "32807": "Orlando, FL",
   "32816": "Orlando, FL",
   "32817": "Orlando, FL",
   "32820": "Orlando, FL",
   "32822": "Orlando, FL",
   "32825": "Orlando, FL",
   "32826": "Orlando, FL",
   "32828": "Orlando, FL",
   "01760": "Newton, MA",
   "02026": "Newton, MA",
   "02130": "Newton, MA",
   "02131": "Newton, MA",
   "02132": "Newton, MA",
   "02135": "Newton, MA",
   "02136": "Newton, MA",
   "02445": "Newton, MA",
   "02451": "Newton, MA",
   "02452": "Newton, MA",
   "02453": "Newton, MA",
   "02458": "Newton, MA",
   "02459": "Newton, MA",
   "02460": "Newton, MA",
   "02461": "Newton, MA",
   "02462": "Newton, MA",
   "02464": "Newton, MA",
   "02465": "Newton, MA",
   "02466": "Newton, MA",
   "02467": "Newton, MA",
   "02468": "Newton, MA",
   "02472": "Newton, MA",
   "02481": "Newton, MA",
   "02482": "Newton, MA",
   "02492": "Newton, MA",
   "02493": "Newton, MA",
   "02494": "Newton, MA",
   "40203": "Louisville, KY",
   "40208": "Louisville, KY",
   "40209": "Louisville, KY",
   "40210": "Louisville, KY",
   "40211": "Louisville, KY",
   "40212": "Louisville, KY",
   "40214": "Louisville, KY",
   "40215": "Louisville, KY",
   "40216": "Louisville, KY",
   "40258": "Louisville, KY",
   "40272": "Louisville, KY",
   "85009": "Phoenix, AZ",
   "85017": "Phoenix, AZ",
   "85019": "Phoenix, AZ",
   "85033": "Phoenix, AZ",
   "85035": "Phoenix, AZ",
   "85037": "Phoenix, AZ",
   "85043": "Phoenix, AZ",
   "85305": "Phoenix, AZ",
   "85307": "Phoenix, AZ",
   "85323": "Phoenix, AZ",
   "85340": "Phoenix, AZ",
   "85353": "Phoenix, AZ",
   "85392": "Phoenix, AZ",
   "65619": "Springfield, MO",
   "65757": "Springfield, MO",
   "65802": "Springfield, MO",
   "65803": "Springfield, MO",
   "65804": "Springfield, MO",
   "65806": "Springfield, MO",
   "65807": "Springfield, MO",
   "65809": "Springfield, MO",
   "65810": "Springfield, MO",
   "33060": "Boca Raton, FL",
   "33062": "Boca Raton, FL",
   "33064": "Boca Raton, FL",
   "33069": "Boca Raton, FL",
   "33073": "Boca Raton, FL",
   "33428": "Boca Raton, FL",
   "33431": "Boca Raton, FL",
   "33432": "Boca Raton, FL",
   "33433": "Boca Raton, FL",
   "33434": "Boca Raton, FL",
   "33441": "Boca Raton, FL",
   "33442": "Boca Raton, FL",
   "33444": "Boca Raton, FL",
   "33445": "Boca Raton, FL",
   "33446": "Boca Raton, FL",
   "33483": "Boca Raton, FL",
   "33484": "Boca Raton, FL",
   "33486": "Boca Raton, FL",
   "33487": "Boca Raton, FL",
   "33496": "Boca Raton, FL",
   "33498": "Boca Raton, FL",
   "33004": "Fort Lauderdale, FL",
   "33063": "Fort Lauderdale, FL",
   "33068": "Fort Lauderdale, FL",
   "33301": "Fort Lauderdale, FL",
   "33304": "Fort Lauderdale, FL",
   "33305": "Fort Lauderdale, FL",
   "33306": "Fort Lauderdale, FL",
   "33308": "Fort Lauderdale, FL",
   "33309": "Fort Lauderdale, FL",
   "33311": "Fort Lauderdale, FL",
   "33312": "Fort Lauderdale, FL",
   "33313": "Fort Lauderdale, FL",
   "33315": "Fort Lauderdale, FL",
   "33316": "Fort Lauderdale, FL",
   "33317": "Fort Lauderdale, FL",
   "33319": "Fort Lauderdale, FL",
   "33334": "Fort Lauderdale, FL",
   "33394": "Fort Lauderdale, FL",
   "33009": "Hollywood, FL",
   "33019": "Hollywood, FL",
   "33020": "Hollywood, FL",
   "33021": "Hollywood, FL",
   "33023": "Hollywood, FL",
   "33024": "Hollywood, FL",
   "33314": "Hollywood, FL",
   "64101": "Kansas City, MO",
   "64102": "Kansas City, MO",
   "64105": "Kansas City, MO",
   "64106": "Kansas City, MO",
   "64108": "Kansas City, MO",
   "64109": "Kansas City, MO",
   "64110": "Kansas City, MO",
   "64111": "Kansas City, MO",
   "64112": "Kansas City, MO",
   "64113": "Kansas City, MO",
   "64116": "Kansas City, MO",
   "64120": "Kansas City, MO",
   "64123": "Kansas City, MO",
   "64124": "Kansas City, MO",
   "64127": "Kansas City, MO",
   "64128": "Kansas City, MO",
   "64130": "Kansas City, MO",
   "64131": "Kansas City, MO",
   "66101": "Kansas City, MO",
   "66102": "Kansas City, MO",
   "66103": "Kansas City, MO",
   "66104": "Kansas City, MO",
   "66105": "Kansas City, MO",
   "66106": "Kansas City, MO",
   "66115": "Kansas City, MO",
   "66118": "Kansas City, MO",
   "66160": "Kansas City, MO",
   "66202": "Kansas City, MO",
   "66203": "Kansas City, MO",
   "66205": "Kansas City, MO",
   "66208": "Kansas City, MO",
   "33127": "Miami, FL",
   "33137": "Miami, FL",
   "33138": "Miami, FL",
   "33150": "Miami, FL",
   "33161": "Miami, FL",
   "33168": "Miami, FL",
   "33181": "Miami, FL",
   "62040": "St. Louis, MO",
   "62090": "St. Louis, MO",
   "62201": "St. Louis, MO",
   "63101": "St. Louis, MO",
   "63102": "St. Louis, MO",
   "63103": "St. Louis, MO",
   "63104": "St. Louis, MO",
   "63105": "St. Louis, MO",
   "63106": "St. Louis, MO",
   "63107": "St. Louis, MO",
   "63108": "St. Louis, MO",
   "63109": "St. Louis, MO",
   "63110": "St. Louis, MO",
   "63111": "St. Louis, MO",
   "63112": "St. Louis, MO",
   "63113": "St. Louis, MO",
   "63115": "St. Louis, MO",
   "63116": "St. Louis, MO",
   "63117": "St. Louis, MO",
   "63118": "St. Louis, MO",
   "63119": "St. Louis, MO",
   "63120": "St. Louis, MO",
   "63121": "St. Louis, MO",
   "63123": "St. Louis, MO",
   "63124": "St. Louis, MO",
   "63125": "St. Louis, MO",
   "63130": "St. Louis, MO",
   "63133": "St. Louis, MO",
   "63139": "St. Louis, MO",
   "63143": "St. Louis, MO",
   "63144": "St. Louis, MO",
   "63147": "St. Louis, MO",
   "33054": "Miami, FL",
   "33056": "Miami, FL",
   "33154": "Miami, FL",
   "33160": "Miami, FL",
   "33162": "Miami, FL",
   "33169": "Miami, FL",
   "33179": "Miami, FL",
   "33180": "Miami, FL",
   "33132": "Miami Beach, FL",
   "33139": "Miami Beach, FL",
   "33140": "Miami Beach, FL",
   "94005": "San Francisco, CA",
   "94014": "San Francisco, CA",
   "94080": "San Francisco, CA",
   "94103": "San Francisco, CA",
   "94105": "San Francisco, CA",
   "94107": "San Francisco, CA",
   "94110": "San Francisco, CA",
   "94111": "San Francisco, CA",
   "94112": "San Francisco, CA",
   "94114": "San Francisco, CA",
   "94116": "San Francisco, CA",
   "94124": "San Francisco, CA",
   "94127": "San Francisco, CA",
   "94131": "San Francisco, CA",
   "94132": "San Francisco, CA",
   "94134": "San Francisco, CA",
   "94158": "San Francisco, CA",
   "94089": "Milpitas, CA",
   "94538": "Milpitas, CA",
   "94539": "Milpitas, CA",
   "95002": "Milpitas, CA",
   "95035": "Milpitas, CA",
   "95054": "Milpitas, CA",
   "95110": "Milpitas, CA",
   "95112": "Milpitas, CA",
   "95116": "Milpitas, CA",
   "95127": "Milpitas, CA",
   "95131": "Milpitas, CA",
   "95132": "Milpitas, CA",
   "95133": "Milpitas, CA",
   "95134": "Milpitas, CA",
   "94928": "Santa Rosa, CA",
   "94931": "Santa Rosa, CA",
   "94951": "Santa Rosa, CA",
   "94952": "Santa Rosa, CA",
   "95401": "Santa Rosa, CA",
   "95403": "Santa Rosa, CA",
   "95404": "Santa Rosa, CA",
   "95405": "Santa Rosa, CA",
   "95407": "Santa Rosa, CA",
   "95409": "Santa Rosa, CA",
   "95439": "Santa Rosa, CA",
   "95448": "Santa Rosa, CA",
   "95472": "Santa Rosa, CA",
   "95492": "Santa Rosa, CA",
   "94501": "Oakland, CA",
   "94502": "Oakland, CA",
   "94601": "Oakland, CA",
   "94602": "Oakland, CA",
   "94606": "Oakland, CA",
   "94607": "Oakland, CA",
   "94608": "Oakland, CA",
   "94609": "Oakland, CA",
   "94610": "Oakland, CA",
   "94611": "Oakland, CA",
   "94612": "Oakland, CA",
   "94618": "Oakland, CA",
   "94621": "Oakland, CA",
   "94705": "Oakland, CA",
   "91935": "La Mesa, CA",
   "91941": "La Mesa, CA",
   "91942": "La Mesa, CA",
   "91945": "La Mesa, CA",
   "91977": "La Mesa, CA",
   "91978": "La Mesa, CA",
   "92019": "La Mesa, CA",
   "92020": "La Mesa, CA",
   "92021": "La Mesa, CA",
   "92071": "La Mesa, CA",
   "92102": "La Mesa, CA",
   "92105": "La Mesa, CA",
   "92108": "La Mesa, CA",
   "92113": "La Mesa, CA",
   "92114": "La Mesa, CA",
   "92115": "La Mesa, CA",
   "92116": "La Mesa, CA",
   "92119": "La Mesa, CA",
   "92120": "La Mesa, CA",
   "92123": "La Mesa, CA",
   "92124": "La Mesa, CA",
   "92182": "La Mesa, CA",
   "94015": "Colma, CA",
   "94019": "Colma, CA",
   "94030": "Colma, CA",
   "94044": "Colma, CA",
   "94066": "Colma, CA",
   "94128": "Colma, CA",
   "94507": "Walnut Creek, CA",
   "94518": "Walnut Creek, CA",
   "94520": "Walnut Creek, CA",
   "94523": "Walnut Creek, CA",
   "94549": "Walnut Creek, CA",
   "94553": "Walnut Creek, CA",
   "94556": "Walnut Creek, CA",
   "94563": "Walnut Creek, CA",
   "94595": "Walnut Creek, CA",
   "94596": "Walnut Creek, CA",
   "94597": "Walnut Creek, CA",
   "94598": "Walnut Creek, CA",
   "94708": "Walnut Creek, CA",
   "94720": "Walnut Creek, CA",
   "94085": "Santa Clara, CA",
   "94086": "Santa Clara, CA",
   "94087": "Santa Clara, CA",
   "95008": "Santa Clara, CA",
   "95014": "Santa Clara, CA",
   "95050": "Santa Clara, CA",
   "95051": "Santa Clara, CA",
   "95053": "Santa Clara, CA",
   "95113": "Santa Clara, CA",
   "95117": "Santa Clara, CA",
   "95125": "Santa Clara, CA",
   "95126": "Santa Clara, CA",
   "95128": "Santa Clara, CA",
   "95129": "Santa Clara, CA",
   "95130": "Santa Clara, CA",
   "91709": "Orange, CA",
   "92602": "Orange, CA",
   "92701": "Orange, CA",
   "92703": "Orange, CA",
   "92705": "Orange, CA",
   "92706": "Orange, CA",
   "92780": "Orange, CA",
   "92782": "Orange, CA",
   "92801": "Orange, CA",
   "92802": "Orange, CA",
   "92805": "Orange, CA",
   "92806": "Orange, CA",
   "92807": "Orange, CA",
   "92808": "Orange, CA",
   "92821": "Orange, CA",
   "92823": "Orange, CA",
   "92831": "Orange, CA",
   "92832": "Orange, CA",
   "92833": "Orange, CA",
   "92835": "Orange, CA",
   "92840": "Orange, CA",
   "92843": "Orange, CA",
   "92861": "Orange, CA",
   "92865": "Orange, CA",
   "92866": "Orange, CA",
   "92867": "Orange, CA",
   "92868": "Orange, CA",
   "92869": "Orange, CA",
   "92870": "Orange, CA",
   "92886": "Orange, CA",
   "92887": "Orange, CA",
   "91708": "Chino, CA",
   "91710": "Chino, CA",
   "91761": "Chino, CA",
   "91762": "Chino, CA",
   "91763": "Chino, CA",
   "91765": "Chino, CA",
   "91766": "Chino, CA",
   "98371": "Tacoma, WA",
   "98388": "Tacoma, WA",
   "98402": "Tacoma, WA",
   "98403": "Tacoma, WA",
   "98404": "Tacoma, WA",
   "98405": "Tacoma, WA",
   "98406": "Tacoma, WA",
   "98407": "Tacoma, WA",
   "98408": "Tacoma, WA",
   "98409": "Tacoma, WA",
   "98416": "Tacoma, WA",
   "98418": "Tacoma, WA",
   "98421": "Tacoma, WA",
   "98424": "Tacoma, WA",
   "98430": "Tacoma, WA",
   "98433": "Tacoma, WA",
   "98438": "Tacoma, WA",
   "98439": "Tacoma, WA",
   "98443": "Tacoma, WA",
   "98444": "Tacoma, WA",
   "98445": "Tacoma, WA",
   "98447": "Tacoma, WA",
   "98465": "Tacoma, WA",
   "98466": "Tacoma, WA",
   "98467": "Tacoma, WA",
   "98498": "Tacoma, WA",
   "98499": "Tacoma, WA",
   "85016": "Scottsdale, AZ",
   "85018": "Scottsdale, AZ",
   "85020": "Scottsdale, AZ",
   "85022": "Scottsdale, AZ",
   "85028": "Scottsdale, AZ",
   "85032": "Scottsdale, AZ",
   "85050": "Scottsdale, AZ",
   "85054": "Scottsdale, AZ",
   "85251": "Scottsdale, AZ",
   "85253": "Scottsdale, AZ",
   "85254": "Scottsdale, AZ",
   "85255": "Scottsdale, AZ",
   "85256": "Scottsdale, AZ",
   "85258": "Scottsdale, AZ",
   "85259": "Scottsdale, AZ",
   "85260": "Scottsdale, AZ",
   "85309": "Goodyear, AZ",
   "85326": "Goodyear, AZ",
   "85329": "Goodyear, AZ",
   "85335": "Goodyear, AZ",
   "85338": "Goodyear, AZ",
   "85355": "Goodyear, AZ",
   "85395": "Goodyear, AZ",
   "85396": "Goodyear, AZ",
   "92008": "Oceanside, CA",
   "92010": "Oceanside, CA",
   "92011": "Oceanside, CA",
   "92054": "Oceanside, CA",
   "92055": "Oceanside, CA",
   "92056": "Oceanside, CA",
   "92057": "Oceanside, CA",
   "92058": "Oceanside, CA",
   "90274": "Torrance, CA",
   "90275": "Torrance, CA",
   "90277": "Torrance, CA",
   "90501": "Torrance, CA",
   "90502": "Torrance, CA",
   "90503": "Torrance, CA",
   "90505": "Torrance, CA",
   "90710": "Torrance, CA",
   "90717": "Torrance, CA",
   "90731": "Torrance, CA",
   "90732": "Torrance, CA",
   "90744": "Torrance, CA",
   "90745": "Torrance, CA",
   "90802": "Torrance, CA",
   "90806": "Torrance, CA",
   "90810": "Torrance, CA",
   "90813": "Torrance, CA",
   "90006": "Pasadena, CA",
   "90007": "Pasadena, CA",
   "90011": "Pasadena, CA",
   "90012": "Pasadena, CA",
   "90013": "Pasadena, CA",
   "90014": "Pasadena, CA",
   "90015": "Pasadena, CA",
   "90017": "Pasadena, CA",
   "90021": "Pasadena, CA",
   "90023": "Pasadena, CA",
   "90026": "Pasadena, CA",
   "90031": "Pasadena, CA",
   "90032": "Pasadena, CA",
   "90033": "Pasadena, CA",
   "90041": "Pasadena, CA",
   "90042": "Pasadena, CA",
   "90057": "Pasadena, CA",
   "90063": "Pasadena, CA",
   "90065": "Pasadena, CA",
   "90071": "Pasadena, CA",
   "91001": "Pasadena, CA",
   "91011": "Pasadena, CA",
   "91020": "Pasadena, CA",
   "91030": "Pasadena, CA",
   "91101": "Pasadena, CA",
   "91103": "Pasadena, CA",
   "91104": "Pasadena, CA",
   "91105": "Pasadena, CA",
   "91106": "Pasadena, CA",
   "91107": "Pasadena, CA",
   "91108": "Pasadena, CA",
   "91123": "Pasadena, CA",
   "91206": "Pasadena, CA",
   "91208": "Pasadena, CA",
   "91754": "Pasadena, CA",
   "91755": "Pasadena, CA",
   "91770": "Pasadena, CA",
   "91775": "Pasadena, CA",
   "91776": "Pasadena, CA",
   "91801": "Pasadena, CA",
   "91803": "Pasadena, CA",
   "93611": "Clovis, CA",
   "93612": "Clovis, CA",
   "93619": "Clovis, CA",
   "93657": "Clovis, CA",
   "93701": "Clovis, CA",
   "93702": "Clovis, CA",
   "93703": "Clovis, CA",
   "93710": "Clovis, CA",
   "93720": "Clovis, CA",
   "93725": "Clovis, CA",
   "93726": "Clovis, CA",
   "93727": "Clovis, CA",
   "93730": "Clovis, CA",
   "93737": "Clovis, CA",
   "93221": "Visalia, CA",
   "93223": "Visalia, CA",
   "93274": "Visalia, CA",
   "93277": "Visalia, CA",
   "93291": "Visalia, CA",
   "93292": "Visalia, CA",
   "91711": "Upland, CA",
   "91730": "Upland, CA",
   "91750": "Upland, CA",
   "91764": "Upland, CA",
   "91767": "Upland, CA",
   "91768": "Upland, CA",
   "91773": "Upland, CA",
   "91786": "Upland, CA",
   "90001": "Culver City, CA",
   "90003": "Culver City, CA",
   "90008": "Culver City, CA",
   "90016": "Culver City, CA",
   "90018": "Culver City, CA",
   "90034": "Culver City, CA",
   "90035": "Culver City, CA",
   "90037": "Culver City, CA",
   "90043": "Culver City, CA",
   "90044": "Culver City, CA",
   "90045": "Culver City, CA",
   "90047": "Culver City, CA",
   "90056": "Culver City, CA",
   "90058": "Culver City, CA",
   "90062": "Culver City, CA",
   "90064": "Culver City, CA",
   "90066": "Culver City, CA",
   "90089": "Culver City, CA",
   "90094": "Culver City, CA",
   "90230": "Culver City, CA",
   "90232": "Culver City, CA",
   "90291": "Culver City, CA",
   "90292": "Culver City, CA",
   "90293": "Culver City, CA",
   "90301": "Culver City, CA",
   "90302": "Culver City, CA",
   "90305": "Culver City, CA",
   "93906": "Salinas, CA",
   "93905": "Salinas, CA",
   "93907": "Salinas, CA",
   "93962": "Salinas, CA",
   "90024": "Santa Monica, CA",
   "90025": "Santa Monica, CA",
   "90049": "Santa Monica, CA",
   "90067": "Santa Monica, CA",
   "90073": "Santa Monica, CA",
   "90077": "Santa Monica, CA",
   "90095": "Santa Monica, CA",
   "90210": "Santa Monica, CA",
   "90212": "Santa Monica, CA",
   "90272": "Santa Monica, CA",
   "90401": "Santa Monica, CA",
   "90402": "Santa Monica, CA",
   "90403": "Santa Monica, CA",
   "90404": "Santa Monica, CA",
   "90405": "Santa Monica, CA",
   "90002": "Manhattan Beach, CA",
   "90059": "Manhattan Beach, CA",
   "90061": "Manhattan Beach, CA",
   "90222": "Manhattan Beach, CA",
   "90245": "Manhattan Beach, CA",
   "90247": "Manhattan Beach, CA",
   "90248": "Manhattan Beach, CA",
   "90249": "Manhattan Beach, CA",
   "90250": "Manhattan Beach, CA",
   "90254": "Manhattan Beach, CA",
   "90260": "Manhattan Beach, CA",
   "90266": "Manhattan Beach, CA",
   "90278": "Manhattan Beach, CA",
   "90303": "Manhattan Beach, CA",
   "90304": "Manhattan Beach, CA",
   "90504": "Manhattan Beach, CA",
   "90506": "Manhattan Beach, CA",
   "94102": "San Francisco, CA",
   "94104": "San Francisco, CA",
   "94108": "San Francisco, CA",
   "94109": "San Francisco, CA",
   "94115": "San Francisco, CA",
   "94117": "San Francisco, CA",
   "94123": "San Francisco, CA",
   "94129": "San Francisco, CA",
   "94133": "San Francisco, CA",
   "95608": "Citrus Heights, CA",
   "95610": "Citrus Heights, CA",
   "95621": "Citrus Heights, CA",
   "95628": "Citrus Heights, CA",
   "95630": "Citrus Heights, CA",
   "95652": "Citrus Heights, CA",
   "95655": "Citrus Heights, CA",
   "95660": "Citrus Heights, CA",
   "95661": "Citrus Heights, CA",
   "95662": "Citrus Heights, CA",
   "95670": "Citrus Heights, CA",
   "95678": "Citrus Heights, CA",
   "95683": "Citrus Heights, CA",
   "95742": "Citrus Heights, CA",
   "95746": "Citrus Heights, CA",
   "95747": "Citrus Heights, CA",
   "95827": "Citrus Heights, CA",
   "95841": "Citrus Heights, CA",
   "95842": "Citrus Heights, CA",
   "95843": "Citrus Heights, CA",
   "94024": "Sunnyvale, CA",
   "94035": "Sunnyvale, CA",
   "94040": "Sunnyvale, CA",
   "94041": "Sunnyvale, CA",
   "94043": "Sunnyvale, CA",
   "95815": "Sacramento, CA",
   "95816": "Sacramento, CA",
   "95819": "Sacramento, CA",
   "95820": "Sacramento, CA",
   "95821": "Sacramento, CA",
   "95825": "Sacramento, CA",
   "95826": "Sacramento, CA",
   "95828": "Sacramento, CA",
   "95829": "Sacramento, CA",
   "95838": "Sacramento, CA",
   "95864": "Sacramento, CA",
   "90068": "Van Nuys, CA",
   "91316": "Van Nuys, CA",
   "91325": "Van Nuys, CA",
   "91326": "Van Nuys, CA",
   "91330": "Van Nuys, CA",
   "91331": "Van Nuys, CA",
   "91335": "Van Nuys, CA",
   "91343": "Van Nuys, CA",
   "91344": "Van Nuys, CA",
   "91345": "Van Nuys, CA",
   "91352": "Van Nuys, CA",
   "91356": "Van Nuys, CA",
   "91401": "Van Nuys, CA",
   "91402": "Van Nuys, CA",
   "91403": "Van Nuys, CA",
   "91405": "Van Nuys, CA",
   "91406": "Van Nuys, CA",
   "91411": "Van Nuys, CA",
   "91423": "Van Nuys, CA",
   "91436": "Van Nuys, CA",
   "91601": "Van Nuys, CA",
   "91602": "Van Nuys, CA",
   "91604": "Van Nuys, CA",
   "91605": "Van Nuys, CA",
   "91606": "Van Nuys, CA",
   "91607": "Van Nuys, CA",
   "93534": "Palmdale, CA",
   "93535": "Palmdale, CA",
   "93536": "Palmdale, CA",
   "93543": "Palmdale, CA",
   "93550": "Palmdale, CA",
   "93551": "Palmdale, CA",
   "93552": "Palmdale, CA",
   "92603": "Irvine, CA",
   "92604": "Irvine, CA",
   "92606": "Irvine, CA",
   "92612": "Irvine, CA",
   "92614": "Irvine, CA",
   "92617": "Irvine, CA",
   "92618": "Irvine, CA",
   "92620": "Irvine, CA",
   "92660": "Irvine, CA",
   "92697": "Irvine, CA",
   "92704": "Irvine, CA",
   "92707": "Irvine, CA",
   "92625": "Costa Mesa, CA",
   "92626": "Costa Mesa, CA",
   "92627": "Costa Mesa, CA",
   "92646": "Costa Mesa, CA",
   "92647": "Costa Mesa, CA",
   "92648": "Costa Mesa, CA",
   "92651": "Costa Mesa, CA",
   "92657": "Costa Mesa, CA",
   "92661": "Costa Mesa, CA",
   "92662": "Costa Mesa, CA",
   "92663": "Costa Mesa, CA",
   "92708": "Costa Mesa, CA",
   "85029": "Glendale, AZ",
   "85053": "Glendale, AZ",
   "85302": "Glendale, AZ",
   "85304": "Glendale, AZ",
   "85306": "Glendale, AZ",
   "85308": "Glendale, AZ",
   "85310": "Glendale, AZ",
   "85345": "Glendale, AZ",
   "85351": "Glendale, AZ",
   "85363": "Glendale, AZ",
   "85373": "Glendale, AZ",
   "85374": "Glendale, AZ",
   "85375": "Glendale, AZ",
   "85378": "Glendale, AZ",
   "85379": "Glendale, AZ",
   "85381": "Glendale, AZ",
   "85382": "Glendale, AZ",
   "85383": "Glendale, AZ",
   "92501": "Moreno Valley, CA",
   "92503": "Moreno Valley, CA",
   "92504": "Moreno Valley, CA",
   "92506": "Moreno Valley, CA",
   "92507": "Moreno Valley, CA",
   "92508": "Moreno Valley, CA",
   "92518": "Moreno Valley, CA",
   "92521": "Moreno Valley, CA",
   "92551": "Moreno Valley, CA",
   "92553": "Moreno Valley, CA",
   "92555": "Moreno Valley, CA",
   "92557": "Moreno Valley, CA",
   "92570": "Moreno Valley, CA",
   "92571": "Moreno Valley, CA",
   "95605": "Sacramento, CA",
   "95624": "Sacramento, CA",
   "95691": "Sacramento, CA",
   "95757": "Sacramento, CA",
   "95758": "Sacramento, CA",
   "95811": "Sacramento, CA",
   "95814": "Sacramento, CA",
   "95817": "Sacramento, CA",
   "95818": "Sacramento, CA",
   "95822": "Sacramento, CA",
   "95823": "Sacramento, CA",
   "95824": "Sacramento, CA",
   "95830": "Sacramento, CA",
   "95831": "Sacramento, CA",
   "95832": "Sacramento, CA",
   "95833": "Sacramento, CA",
   "92104": "San Diego, CA",
   "92101": "San Diego, CA",
   "92103": "San Diego, CA",
   "92110": "San Diego, CA",
   "92117": "San Diego, CA",
   "92106": "San Diego, CA",
   "92107": "San Diego, CA",
   "92111": "San Diego, CA",
   "92140": "San Diego, CA",
   "92134": "San Diego, CA",
   "92132": "San Diego, CA",
   "92147": "San Diego, CA",
   "92025": "San Diego, CA",
   "92029": "San Diego, CA",
   "92064": "San Diego, CA",
   "92067": "San Diego, CA",
   "92121": "San Diego, CA",
   "92122": "San Diego, CA",
   "92126": "San Diego, CA",
   "92127": "San Diego, CA",
   "92128": "San Diego, CA",
   "92129": "San Diego, CA",
   "92130": "San Diego, CA",
   "92131": "San Diego, CA",
   "92145": "San Diego, CA",
   "85619": "Tucson, AZ",
   "85707": "Tucson, AZ",
   "85708": "Tucson, AZ",
   "85710": "Tucson, AZ",
   "85711": "Tucson, AZ",
   "85712": "Tucson, AZ",
   "85713": "Tucson, AZ",
   "85715": "Tucson, AZ",
   "85716": "Tucson, AZ",
   "85718": "Tucson, AZ",
   "85730": "Tucson, AZ",
   "85747": "Tucson, AZ",
   "85748": "Tucson, AZ",
   "85749": "Tucson, AZ",
   "85750": "Tucson, AZ",
   "94530": "Albany, CA",
   "94702": "Albany, CA",
   "94703": "Albany, CA",
   "94704": "Albany, CA",
   "94706": "Albany, CA",
   "94707": "Albany, CA",
   "94709": "Albany, CA",
   "94710": "Albany, CA",
   "94801": "Albany, CA",
   "94804": "Albany, CA",
   "94805": "Albany, CA",
   "94901": "San Rafael, CA",
   "94903": "San Rafael, CA",
   "94904": "San Rafael, CA",
   "94925": "San Rafael, CA",
   "94930": "San Rafael, CA",
   "94939": "San Rafael, CA",
   "94957": "San Rafael, CA",
   "94960": "San Rafael, CA",
   "94964": "San Rafael, CA",
   "94973": "San Rafael, CA",
   "85044": "Chandler, AZ",
   "85045": "Chandler, AZ",
   "85048": "Chandler, AZ",
   "85226": "Chandler, AZ",
   "85283": "Chandler, AZ",
   "85284": "Chandler, AZ",
   "85339": "Chandler, AZ",
   "90290": "Canoga Park, CA",
   "91302": "Canoga Park, CA",
   "91303": "Canoga Park, CA",
   "91304": "Canoga Park, CA",
   "91306": "Canoga Park, CA",
   "91307": "Canoga Park, CA",
   "91311": "Canoga Park, CA",
   "91324": "Canoga Park, CA",
   "91364": "Canoga Park, CA",
   "91367": "Canoga Park, CA",
   "91371": "Canoga Park, CA",
   "90620": "Cypress, CA",
   "90621": "Cypress, CA",
   "90623": "Cypress, CA",
   "90630": "Cypress, CA",
   "90638": "Cypress, CA",
   "90670": "Cypress, CA",
   "90680": "Cypress, CA",
   "90701": "Cypress, CA",
   "90703": "Cypress, CA",
   "90713": "Cypress, CA",
   "90715": "Cypress, CA",
   "90716": "Cypress, CA",
   "90720": "Cypress, CA",
   "90740": "Cypress, CA",
   "90742": "Cypress, CA",
   "90743": "Cypress, CA",
   "90755": "Cypress, CA",
   "90803": "Cypress, CA",
   "90804": "Cypress, CA",
   "90808": "Cypress, CA",
   "90814": "Cypress, CA",
   "90815": "Cypress, CA",
   "90840": "Cypress, CA",
   "92649": "Cypress, CA",
   "92655": "Cypress, CA",
   "92683": "Cypress, CA",
   "92804": "Cypress, CA",
   "92841": "Cypress, CA",
   "92844": "Cypress, CA",
   "92845": "Cypress, CA",
   "91006": "Pasadena, CA",
   "91007": "Pasadena, CA",
   "91008": "Pasadena, CA",
   "91010": "Pasadena, CA",
   "91016": "Pasadena, CA",
   "91024": "Pasadena, CA",
   "91731": "Pasadena, CA",
   "91780": "Pasadena, CA",
   "91702": "Glendora, CA",
   "91706": "Glendora, CA",
   "91722": "Glendora, CA",
   "91723": "Glendora, CA",
   "91724": "Glendora, CA",
   "91740": "Glendora, CA",
   "91741": "Glendora, CA",
   "91790": "Glendora, CA",
   "91791": "Glendora, CA",
   "93563": "Glendora, CA",
   "92201": "La Quinta, CA",
   "92203": "La Quinta, CA",
   "92210": "La Quinta, CA",
   "92211": "La Quinta, CA",
   "92236": "La Quinta, CA",
   "92241": "La Quinta, CA",
   "92253": "La Quinta, CA",
   "92260": "La Quinta, CA",
   "92270": "La Quinta, CA",
   "92274": "La Quinta, CA",
   "92276": "La Quinta, CA",
   "90004": "West Hollywood, CA",
   "90005": "West Hollywood, CA",
   "90019": "West Hollywood, CA",
   "90020": "West Hollywood, CA",
   "90027": "West Hollywood, CA",
   "90028": "West Hollywood, CA",
   "90029": "West Hollywood, CA",
   "90036": "West Hollywood, CA",
   "90038": "West Hollywood, CA",
   "90046": "West Hollywood, CA",
   "90048": "West Hollywood, CA",
   "91608": "West Hollywood, CA",
   "94536": "Fremont, CA",
   "94544": "Fremont, CA",
   "94555": "Fremont, CA",
   "94560": "Fremont, CA",
   "94587": "Fremont, CA",
   "95013": "San Jose, CA",
   "95111": "San Jose, CA",
   "95118": "San Jose, CA",
   "95119": "San Jose, CA",
   "95120": "San Jose, CA",
   "95121": "San Jose, CA",
   "95122": "San Jose, CA",
   "95123": "San Jose, CA",
   "95124": "San Jose, CA",
   "95135": "San Jose, CA",
   "95136": "San Jose, CA",
   "95138": "San Jose, CA",
   "95139": "San Jose, CA",
   "95148": "San Jose, CA",
   "95192": "San Jose, CA",
   "93001": "Ventura, CA",
   "93003": "Ventura, CA",
   "93004": "Ventura, CA",
   "93030": "Ventura, CA",
   "93033": "Ventura, CA",
   "93035": "Ventura, CA",
   "93036": "Ventura, CA",
   "93041": "Ventura, CA",
   "93043": "Ventura, CA",
   "93060": "Ventura, CA",
   "93066": "Ventura, CA",
   "94525": "Pinole, CA",
   "94547": "Pinole, CA",
   "94564": "Pinole, CA",
   "94569": "Pinole, CA",
   "94572": "Pinole, CA",
   "94803": "Pinole, CA",
   "94806": "Pinole, CA",
   "90746": "Torrance, CA",
   "90747": "Torrance, CA",
   "92024": "Escondido, CA",
   "92026": "Escondido, CA",
   "92027": "Escondido, CA",
   "92069": "Escondido, CA",
   "92078": "Escondido, CA",
   "92084": "Escondido, CA",
   "92091": "Escondido, CA",
   "92096": "Escondido, CA",
   "91360": "Simi Valley, CA",
   "91362": "Simi Valley, CA",
   "93012": "Simi Valley, CA",
   "93021": "Simi Valley, CA",
   "93063": "Simi Valley, CA",
   "93065": "Simi Valley, CA",
   "95626": "Sacramento, CA",
   "95673": "Sacramento, CA",
   "95834": "Sacramento, CA",
   "95835": "Sacramento, CA",
   "95836": "Sacramento, CA",
   "95202": "Stockton, CA",
   "95203": "Stockton, CA",
   "95204": "Stockton, CA",
   "95205": "Stockton, CA",
   "95206": "Stockton, CA",
   "95207": "Stockton, CA",
   "95209": "Stockton, CA",
   "95210": "Stockton, CA",
   "95211": "Stockton, CA",
   "95212": "Stockton, CA",
   "95215": "Stockton, CA",
   "95219": "Stockton, CA",
   "95240": "Stockton, CA",
   "95242": "Stockton, CA",
   "91701": "Rancho Cucamonga, CA",
   "91737": "Rancho Cucamonga, CA",
   "91739": "Rancho Cucamonga, CA",
   "91752": "Rancho Cucamonga, CA",
   "92316": "Rancho Cucamonga, CA",
   "92335": "Rancho Cucamonga, CA",
   "92336": "Rancho Cucamonga, CA",
   "92337": "Rancho Cucamonga, CA",
   "92376": "Rancho Cucamonga, CA",
   "92377": "Rancho Cucamonga, CA",
   "93636": "Fresno, CA",
   "93650": "Fresno, CA",
   "93704": "Fresno, CA",
   "93705": "Fresno, CA",
   "93711": "Fresno, CA",
   "93721": "Fresno, CA",
   "93722": "Fresno, CA",
   "93723": "Fresno, CA",
   "93728": "Fresno, CA",
   "93741": "Fresno, CA",
   "95648": "Roseville, CA",
   "95650": "Roseville, CA",
   "95663": "Roseville, CA",
   "95668": "Roseville, CA",
   "95677": "Roseville, CA",
   "95765": "Roseville, CA",
   "92313": "Redlands, CA",
   "92318": "Redlands, CA",
   "92324": "Redlands, CA",
   "92346": "Redlands, CA",
   "92350": "Redlands, CA",
   "92354": "Redlands, CA",
   "92359": "Redlands, CA",
   "92373": "Redlands, CA",
   "92374": "Redlands, CA",
   "92399": "Redlands, CA",
   "92401": "Redlands, CA",
   "92404": "Redlands, CA",
   "92405": "Redlands, CA",
   "92407": "Redlands, CA",
   "92408": "Redlands, CA",
   "92410": "Redlands, CA",
   "92415": "Redlands, CA",
   "92505": "Corona, CA",
   "92860": "Corona, CA",
   "92878": "Corona, CA",
   "92879": "Corona, CA",
   "92881": "Corona, CA",
   "92882": "Corona, CA",
   "92883": "Corona, CA",
   "92610": "Lake Forest, CA",
   "92630": "Lake Forest, CA",
   "92637": "Lake Forest, CA",
   "92653": "Lake Forest, CA",
   "92656": "Lake Forest, CA",
   "92675": "Lake Forest, CA",
   "92676": "Lake Forest, CA",
   "92679": "Lake Forest, CA",
   "92688": "Lake Forest, CA",
   "92691": "Lake Forest, CA",
   "92692": "Lake Forest, CA",
   "85023": "Phoenix, AZ",
   "85024": "Phoenix, AZ",
   "85027": "Phoenix, AZ",
   "85083": "Phoenix, AZ",
   "85085": "Phoenix, AZ",
   "85086": "Phoenix, AZ",
   "94506": "Pleasanton, CA",
   "94551": "Pleasanton, CA",
   "94566": "Pleasanton, CA",
   "94568": "Pleasanton, CA",
   "94582": "Pleasanton, CA",
   "94583": "Pleasanton, CA",
   "94586": "Pleasanton, CA",
   "94588": "Pleasanton, CA",
   "92007": "Encinitas, CA",
   "92009": "Encinitas, CA",
   "92014": "Encinitas, CA",
   "92075": "Encinitas, CA",
   "94526": "Danville, CA",
   "94528": "Danville, CA",
   "92672": "Ladera Ranch, CA",
   "92673": "Ladera Ranch, CA",
   "92677": "Ladera Ranch, CA",
   "92694": "Ladera Ranch, CA",
   "93401": "San Luis Obispo, CA",
   "93402": "San Luis Obispo, CA",
   "93405": "San Luis Obispo, CA",
   "93407": "San Luis Obispo, CA",
   "93408": "San Luis Obispo, CA",
   "93410": "San Luis Obispo, CA",
   "93424": "San Luis Obispo, CA",
   "93449": "San Luis Obispo, CA",
   "90039": "Glendale, CA",
   "91042": "Glendale, CA",
   "91201": "Glendale, CA",
   "91202": "Glendale, CA",
   "91203": "Glendale, CA",
   "91204": "Glendale, CA",
   "91205": "Glendale, CA",
   "91207": "Glendale, CA",
   "91210": "Glendale, CA",
   "91214": "Glendale, CA",
   "94002": "San Mateo, CA",
   "94010": "San Mateo, CA",
   "94025": "San Mateo, CA",
   "94027": "San Mateo, CA",
   "94061": "San Mateo, CA",
   "94062": "San Mateo, CA",
   "94063": "San Mateo, CA",
   "94065": "San Mateo, CA",
   "94070": "San Mateo, CA",
   "94303": "San Mateo, CA",
   "94401": "San Mateo, CA",
   "94402": "San Mateo, CA",
   "94403": "San Mateo, CA",
   "94404": "San Mateo, CA",
   "94541": "San Leandro, CA",
   "94542": "San Leandro, CA",
   "94545": "San Leandro, CA",
   "94546": "San Leandro, CA",
   "94552": "San Leandro, CA",
   "94577": "San Leandro, CA",
   "94578": "San Leandro, CA",
   "94579": "San Leandro, CA",
   "94580": "San Leandro, CA",
   "94603": "San Leandro, CA",
   "94605": "San Leandro, CA",
   "94613": "San Leandro, CA",
   "94619": "San Leandro, CA",
   "91040": "Burbank, CA",
   "91342": "Burbank, CA",
   "91501": "Burbank, CA",
   "91502": "Burbank, CA",
   "91504": "Burbank, CA",
   "91505": "Burbank, CA",
   "91506": "Burbank, CA",
   "91521": "Burbank, CA",
   "91522": "Burbank, CA",
   "91523": "Burbank, CA",
   "90601": "City of Industry, CA",
   "91732": "City of Industry, CA",
   "91733": "City of Industry, CA",
   "91744": "City of Industry, CA",
   "91745": "City of Industry, CA",
   "91746": "City of Industry, CA",
   "91748": "City of Industry, CA",
   "91789": "City of Industry, CA",
   "91792": "City of Industry, CA",
   "91915": "Chula Vista, CA",
   "91902": "Chula Vista, CA",
   "91914": "Chula Vista, CA",
   "91911": "Chula Vista, CA",
   "91910": "Chula Vista, CA",
   "91913": "Chula Vista, CA",
   "92139": "Chula Vista, CA",
   "93013": "Santa Barbara, CA",
   "93067": "Santa Barbara, CA",
   "93101": "Santa Barbara, CA",
   "93103": "Santa Barbara, CA",
   "93105": "Santa Barbara, CA",
   "93108": "Santa Barbara, CA",
   "93109": "Santa Barbara, CA",
   "93110": "Santa Barbara, CA",
   "93111": "Santa Barbara, CA",
   "94517": "Walnut Creek, CA",
   "94519": "Walnut Creek, CA",
   "94521": "Walnut Creek, CA",
   "94565": "Walnut Creek, CA",
   "91321": "Santa Clarita, CA",
   "91340": "Santa Clarita, CA",
   "91350": "Santa Clarita, CA",
   "91351": "Santa Clarita, CA",
   "91355": "Santa Clarita, CA",
   "91381": "Santa Clarita, CA",
   "91387": "Santa Clarita, CA",
   "91390": "Santa Clarita, CA",
   "92624": "Laguna Niguel, CA",
   "92629": "Laguna Niguel, CA",
   "92530": "Murrieta, CA",
   "92562": "Murrieta, CA",
   "92563": "Murrieta, CA",
   "92584": "Murrieta, CA",
   "92590": "Murrieta, CA",
   "92591": "Murrieta, CA",
   "92595": "Murrieta, CA",
   "92596": "Murrieta, CA",
   "93106": "Goleta, CA",
   "93117": "Goleta, CA",
   "95319": "Riverbank, CA",
   "95320": "Riverbank, CA",
   "95350": "Riverbank, CA",
   "95354": "Riverbank, CA",
   "95355": "Riverbank, CA",
   "95356": "Riverbank, CA",
   "95357": "Riverbank, CA",
   "95361": "Riverbank, CA",
   "95367": "Riverbank, CA",
   "94533": "Fairfield, CA",
   "94534": "Fairfield, CA",
   "98117": "Seattle, WA",
   "98109": "Seattle, WA",
   "98103": "Seattle, WA",
   "98107": "Seattle, WA",
   "98119": "Seattle, WA",
   "98177": "Seattle, WA",
   "98133": "Seattle, WA",
   "98199": "Seattle, WA",
   "33014": "Miramar, FL",
   "33015": "Miramar, FL",
   "33016": "Miramar, FL",
   "33018": "Miramar, FL",
   "33025": "Miramar, FL",
   "33026": "Miramar, FL",
   "33027": "Miramar, FL",
   "33028": "Miramar, FL",
   "33055": "Miramar, FL",
   "33328": "Miramar, FL",
   "33330": "Miramar, FL",
   "33331": "Miramar, FL",
   "85387": "Peoria, AZ",
   "97230": "Vancouver, WA",
   "98606": "Vancouver, WA",
   "98607": "Vancouver, WA",
   "98660": "Vancouver, WA",
   "98661": "Vancouver, WA",
   "98662": "Vancouver, WA",
   "98663": "Vancouver, WA",
   "98664": "Vancouver, WA",
   "98665": "Vancouver, WA",
   "98671": "Vancouver, WA",
   "98682": "Vancouver, WA",
   "98683": "Vancouver, WA",
   "98684": "Vancouver, WA",
   "98004": "Bellevue, WA",
   "98005": "Bellevue, WA",
   "98006": "Bellevue, WA",
   "98033": "Bellevue, WA",
   "98034": "Bellevue, WA",
   "98039": "Bellevue, WA",
   "98040": "Bellevue, WA",
   "98225": "Bellingham, WA",
   "98226": "Bellingham, WA",
   "98229": "Bellingham, WA",
   "98247": "Bellingham, WA",
   "98248": "Bellingham, WA",
   "98264": "Bellingham, WA",
   "64012": "Kansas City, MO",
   "64030": "Kansas City, MO",
   "64052": "Kansas City, MO",
   "64055": "Kansas City, MO",
   "64083": "Kansas City, MO",
   "64114": "Kansas City, MO",
   "64129": "Kansas City, MO",
   "64132": "Kansas City, MO",
   "64133": "Kansas City, MO",
   "64134": "Kansas City, MO",
   "64137": "Kansas City, MO",
   "64138": "Kansas City, MO",
   "64145": "Kansas City, MO",
   "64146": "Kansas City, MO",
   "64147": "Kansas City, MO",
   "64149": "Kansas City, MO",
   "66062": "Kansas City, MO",
   "66085": "Kansas City, MO",
   "66204": "Kansas City, MO",
   "66206": "Kansas City, MO",
   "66207": "Kansas City, MO",
   "66209": "Kansas City, MO",
   "66210": "Kansas City, MO",
   "66211": "Kansas City, MO",
   "66212": "Kansas City, MO",
   "66213": "Kansas City, MO",
   "66214": "Kansas City, MO",
   "66215": "Kansas City, MO",
   "66216": "Kansas City, MO",
   "66217": "Kansas City, MO",
   "66219": "Kansas City, MO",
   "66221": "Kansas City, MO",
   "66223": "Kansas City, MO",
   "66224": "Kansas City, MO",
   "70767": "Baton Rouge, LA",
   "70801": "Baton Rouge, LA",
   "70802": "Baton Rouge, LA",
   "70803": "Baton Rouge, LA",
   "70805": "Baton Rouge, LA",
   "70806": "Baton Rouge, LA",
   "70807": "Baton Rouge, LA",
   "70808": "Baton Rouge, LA",
   "70809": "Baton Rouge, LA",
   "70810": "Baton Rouge, LA",
   "70813": "Baton Rouge, LA",
   "70815": "Baton Rouge, LA",
   "70816": "Baton Rouge, LA",
   "70820": "Baton Rouge, LA",
   "70836": "Baton Rouge, LA",
   "60015": "Glenview, IL",
   "60016": "Glenview, IL",
   "60018": "Glenview, IL",
   "60025": "Glenview, IL",
   "60026": "Glenview, IL",
   "60029": "Glenview, IL",
   "60043": "Glenview, IL",
   "60053": "Glenview, IL",
   "60056": "Glenview, IL",
   "60062": "Glenview, IL",
   "60068": "Glenview, IL",
   "60070": "Glenview, IL",
   "60076": "Glenview, IL",
   "60077": "Glenview, IL",
   "60090": "Glenview, IL",
   "60091": "Glenview, IL",
   "60093": "Glenview, IL",
   "60201": "Glenview, IL",
   "60203": "Glenview, IL",
   "60631": "Glenview, IL",
   "60646": "Glenview, IL",
   "60666": "Glenview, IL",
   "60714": "Glenview, IL",
   "96001": "Redding, CA",
   "96002": "Redding, CA",
   "96003": "Redding, CA",
   "96008": "Redding, CA",
   "96019": "Redding, CA",
   "96062": "Redding, CA",
   "96069": "Redding, CA",
   "96073": "Redding, CA",
   "92592": "Temecula, CA",
   "91354": "Valencia, CA",
   "91384": "Valencia, CA",
   "96150": "South Lake Tahoe, CA",
   "91759": "Upland, CA",
   "91784": "Upland, CA",
   "95307": "Modesto, CA",
   "95326": "Modesto, CA",
   "95351": "Modesto, CA",
   "95358": "Modesto, CA",
   "95366": "Modesto, CA",
   "95368": "Modesto, CA",
   "95003": "Capitola, CA",
   "95010": "Capitola, CA",
   "95018": "Capitola, CA",
   "95060": "Capitola, CA",
   "95062": "Capitola, CA",
   "95064": "Capitola, CA",
   "95065": "Capitola, CA",
   "95066": "Capitola, CA",
   "95073": "Capitola, CA",
   "95076": "Capitola, CA",
   "90069": "Los Angeles, CA",
   "90211": "Los Angeles, CA",
   "02043": "Quincy, MA",
   "02061": "Quincy, MA",
   "02122": "Quincy, MA",
   "02124": "Quincy, MA",
   "02126": "Quincy, MA",
   "02169": "Quincy, MA",
   "02170": "Quincy, MA",
   "02171": "Quincy, MA",
   "02184": "Quincy, MA",
   "02186": "Quincy, MA",
   "02188": "Quincy, MA",
   "02189": "Quincy, MA",
   "02190": "Quincy, MA",
   "02191": "Quincy, MA",
   "02343": "Quincy, MA",
   "02368": "Quincy, MA",
   "02370": "Quincy, MA",
   "33125": "Miami, FL",
   "33126": "Miami, FL",
   "33128": "Miami, FL",
   "33129": "Miami, FL",
   "33130": "Miami, FL",
   "33131": "Miami, FL",
   "33133": "Miami, FL",
   "33134": "Miami, FL",
   "33135": "Miami, FL",
   "33136": "Miami, FL",
   "33142": "Miami, FL",
   "33143": "Miami, FL",
   "33144": "Miami, FL",
   "33145": "Miami, FL",
   "33146": "Miami, FL",
   "33155": "Miami, FL",
   "33156": "Miami, FL",
   "92037": "La Jolla, CA",
   "92109": "La Jolla, CA",
   "92003": "Vista, CA",
   "92081": "Vista, CA",
   "92083": "Vista, CA",
   "94022": "Los Altos, CA",
   "94028": "Los Altos, CA",
   "94301": "Los Altos, CA",
   "94304": "Los Altos, CA",
   "94305": "Los Altos, CA",
   "94306": "Los Altos, CA",
   "95926": "Chico, CA",
   "95928": "Chico, CA",
   "95938": "Chico, CA",
   "95973": "Chico, CA",
   "94505": "Tracy, CA",
   "94514": "Tracy, CA",
   "94550": "Tracy, CA",
   "95304": "Tracy, CA",
   "95376": "Tracy, CA",
   "95377": "Tracy, CA",
   "95391": "Tracy, CA",
   "90265": "Thousand Oaks, CA",
   "91301": "Thousand Oaks, CA",
   "91320": "Thousand Oaks, CA",
   "91361": "Thousand Oaks, CA",
   "91377": "Thousand Oaks, CA",
   "92509": "Jurupa Valley, CA",
   "94945": "Novato, CA",
   "94947": "Novato, CA",
   "94949": "Novato, CA",
   "94954": "Novato, CA",
   "92234": "Palm Springs, CA",
   "92240": "Palm Springs, CA",
   "92258": "Palm Springs, CA",
   "92262": "Palm Springs, CA",
   "92264": "Palm Springs, CA",
   "02114": "Allston, MA",
   "02115": "Allston, MA",
   "02116": "Allston, MA",
   "02118": "Allston, MA",
   "02120": "Allston, MA",
   "02129": "Allston, MA",
   "02134": "Allston, MA",
   "02138": "Allston, MA",
   "02139": "Allston, MA",
   "02140": "Allston, MA",
   "02141": "Allston, MA",
   "02142": "Allston, MA",
   "02143": "Allston, MA",
   "02144": "Allston, MA",
   "02145": "Allston, MA",
   "02153": "Allston, MA",
   "02155": "Allston, MA",
   "02163": "Allston, MA",
   "02215": "Allston, MA",
   "02446": "Allston, MA",
   "02478": "Allston, MA",
   "95033": "Los Gatos, CA",
   "95030": "Los Gatos, CA",
   "95032": "Los Gatos, CA",
   "95070": "Los Gatos, CA"
  },
  "handles": [
   "bourbon",
   "double-rye"
  ]
 },
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/gopuff-icon.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
