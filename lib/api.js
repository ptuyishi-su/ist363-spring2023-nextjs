const API_URL = process.env.WORDPRESS_GRAPHQL_API_URL

async function fetchAPI(query, { variables } = {}) {
   // console.log("fetchAPI");
	const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})
	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllVehicles() {
    const data = await fetchAPI(`
    query NewQuery {
      vehicles {
        edges {
          node {
            title
            slug
          }
        }
      }
    }`)
    return data?.vehicles.edges
}



const vehicles = [
    {
      "model": "Crosstrek",
      "slug": "crosstrek",
      "price": 24995
    },
    {
      "model": "Forester",
      "slug": "forester",
      "price": 27095
    },
    {
      "model": "Outback",
      "slug": "outback",
      "price": 28895
    },
    {
      "model": "Ascent",
      "slug": "ascent",
      "price": 34195
    },
    {
      "model": "Solterra",
      "slug": "solterra",
      "price": 44995
    },
    {
      "model": "Impreza",
      "slug": "impreza",
      "price": 22995
    },
    {
      "model": "Legacy",
      "slug": "legacy",
      "price": 24895
    },
    {
      "model": "BRZ",
      "slug": "brz",
      "price": 28595
    },
    {
      "model": "WRX",
      "slug": "wrx",
      "price": 30605
    }
  ];
  export function getAllVehicleSlugs(){
    const paths= vehicles.map((vehicle) => {
      return vehicle.slug;
    });
    return paths;
  }

  export function getVehicleBySlug(slug) {
    const foundvehicle=vehicles.find((vehicle)=>{
      //return true or false
      return vehicle.slug ===slug;
    });
    return foundvehicle
  }
  // export function getAllVehicles (){ 
  //   return vehicles;
  // }