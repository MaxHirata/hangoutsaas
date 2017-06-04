db = db.getSiblingDB('HangOut')
db.createCollection('events')
eventsCollection = db.getCollection("events")
eventsCollection.remove({})
eventsCollection.insert({
    eventName: "Dinner with Squad",
    description: "The homies tryna kick it somewhere at some time",
    eventId: 1,
    date: "04-30-2017",
    status: "Completed",
    venue: "Kizuki Ramen",
    time: "8:00 PM"
})
eventsCollection.insert({
    eventName: "Sibling Reunion",
    description: "To celebrate little sibling's birthday",
    eventId: 2,
    date: "05-01-2017",
    status: "Completed",
    venue: "Din Tai Fung",
    time: "12:00 PM"
})
eventsCollection.insert({
    eventName: "Work Outing",
    description: "To celebrate the launch of our product",
    eventId: 3,
    date: "05-03-2017",
    status: "In Progress",
    venue: "Pending",
    time: "Pending"
})
db.createCollection('venues')
venuesCollection = db.getCollection("venues")
venuesCollection.remove({})
venuesCollection.insert({
    eventId: 1,
    eventName: "Dinner with Squad",
    venues: [{
            name: "Kizuki Ramen",
            venueId: 1,
            address: "123 N First Street",
            venueType: "Restaurant"
        },
        {
            name: "Pho Le",
            venueId: 2,
            address: "123 N First Street",
            venueType: "Restaurant"
        },
        {
            name: "Lemongrass",
            venueId: 3,
            address: "123 N First Street",
            venueType: "Restaurant"
        },
        {
            name: "Ba Bar",
            venueId: 4,
            address: "123 N First Street",
            venueType: "Restaurant"
        },
        {
            name: "Gokan",
            venueId: 5,
            address: "123 N First Street",
            venueType: "Restaurant"
        }
    ]
})
venuesCollection.insert({
    eventId: 2,
    eventName: "Sibling Reunion",
    venues: [{
            name: "Shiro's",
            venueId: 1,
            address: "2401 2nd Avenue",
            venueType: "Restaurant"
        },
        {
            name: "El gaucho",
            venueId: 2,
            address: "2505 First Avenue",
            venueType: "Restaurant"
        },
        {
            name: "Din tai Fung",
            venueId: 3,
            address: "2621 NE 46th St",
            venueType: "Restaurant"
        },
        {
            name: "Altura",
            venueId: 4,
            address: "617 Broadway E",
            venueType: "Restaurant"
        },
        {
            name: "Canlis",
            venueId: 5,
            address: "2576 Aurora Ave N",
            venueType: "Restaurant"
        }
    ]
})
venuesCollection.insert({
    eventId: 3,
    eventName: "Work Outing",
    venues: [{
            name: "West Seattle Bowl",
            venueId: 1,
            address: "4505 39th Ave SW",
            venueType: "Recreation"
        },
        {
            name: "Optimism Brewing Company",
            venueId: 2,
            address: "1158 Broadway",
            venueType: "Brewery"
        },
        {
            name: "Agave Cocina",
            venueId: 3,
            address: "100 Republican St",
            venueType: "Restaurant"
        },
        {
            name: "Flatstick Pub",
            venueId: 4,
            address: "240 2nd Ave S",
            venueType: "Pub/Recreation"
        },
        {
            name: "Regal Meridian 16",
            venueId: 5,
            address: "1501 7th Ave",
            venueType: "Theater"
        }
    ]
})