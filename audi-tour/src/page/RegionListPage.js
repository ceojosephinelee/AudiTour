import React, {useEffect, useState} from 'react'

function RegionListPage() {
  const [loading, setLoading] = useState(true);
  const [names, setNames] = useState([]);
  const getNames = async () => {
    const json = await (
      await fetch(
        `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=QtxR33BAWJG413oY8NxRSSLPG8FGqbBnNsQ%2FT%2BcUqxJPDeNS%2FV3PAvAp4a7n04VoR2hd8r2Q7ERrd9BrXn5S9w%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AudiTour&_type=json`
      )
    ).json();
    setNames(json.response.body.item.name);
    setLoading(false);
  };
  useEffect(() => {
    getNames();
  }, []);
 
}

export default RegionListPage