/*import React, { useEffect } from "react"

const SideAd = () => {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad(trial is loaded if not check node_Adit dir) is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <ins
      className="adsbygoogle "
      style={{ display: "inline-block",width:"728px",height:"90px" }}
      data-ad-client="ca-pub-3998662511233039"
      data-ad-slot="4595055203"
     data-ad-format="auto"
    ></ins>
  )
}
export default SideAd;*/