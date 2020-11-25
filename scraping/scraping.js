const Nightmare = require('nightmare')
const nightmare = Nightmare({show: true})


let confirme = {
  text: "Confirmés", 
  numberTotal: 0,
  number_per_day: 0
}


const getDataFrance = () => {
  nightmare
    .goto('https://www.bing.com/search?q=covid+chiffre&cvid=e95d78e15a484402abec2572b4945954&pglt=547&FORM=ANNTA1&PC=DCTS')
    .evaluate( () => {
      const div_cot_root = document.querySelector('div.cov_root.noTabs.b_entityTP.is-context')

      let data_confirm = []

      confirme = div_cot_root.querySelectorAll('div.c_stat.c_cnfrm').forEach( elm => data_confirm.push(elm.textContent.split(/[s,+]/)))
      death = div_cot_root.querySelectorAll('div.c_stat.c_dths').forEach( elm => data_confirm.push(elm.textContent.split(/[s,+]/)))
      guerison = div_cot_root.querySelectorAll('div.c_stat.c_rcvrd').forEach( elm => data_confirm.push(["Guérisons", elm.textContent.substr(9).split(/[+]/)]))
      data_confirm.forEach( data => console.log(JSON.stringify(data)))

      return {
        data: data_confirm
      }
    })
    .end()
    .then( ({data}) => {
      data.forEach( (elm) => {
        elm.forEach(e => console.log(e))
        console.log("\n\n")
      })
      console.log("Reussi")
    })
}

function getStatCovid() {
  nightmare
    .goto("https://www.bing.com/search?q=Statistiques+relatives+au+coronavirus&tf=U2VydmljZT1HZW5lcmljQW5zd2VycyBTY2VuYXJpbz1Db3JvbmFWaXJ1c01MIFBvc2l0aW9uPVRPUCBSYW5raW5nRGF0YT1UcnVlIEZvcmNlUGxhY2U9VHJ1ZSBQYWlycz1zY246Q29yb25hVmlydXNNTDtzdGF0c19TY29wZTpXb3JsZDtzdGF0c19Jc0JyZWFrZG93bkV4cGFuZGVkOlRydWU7aW50ZW50OkNoZWNrU3RhdHNCcmVha2Rvd247YWJvdmVuZXdzOlRydWU7IHw%3d&hs=7D2uGuqddu2d6LhiKHqQ7FzTzZWOtPu0%2bivch7sWwas%3d&FORM=COVIDR")
    .evaluate( () => {
      const cov_breakdown = document.querySelector('div.cov_breakdown')

      let data_more = []
      rows = cov_breakdown.querySelectorAll('div.cov_row > div.cov_cell').forEach(row => {
        let data = []
        data.push(row.textContent)
        data_more.push(data)
      })
      return { row : data_more}
    })
    .end()
    .then( ({row}) => {
      let newData = []
      n = 0
      row.forEach( (r) => {
        let d = []
        d.push(r)
        n++
        if (n === 3) {
          newData.push(d)
          n = 0
        }
        newData.forEach(d => {
          console.log(d)
        })
      })
    })
}


const getMapData = () => {
  nightmare
    .goto('https://www.bing.com/covid/local/france?form=C19ANS')
    .evaluate( () => {
      const div_cot_root = document.querySelector("div.content")
      console.log(div_cot_root)
      let dataMap = []

      areaDiv = div_cot_root.querySelectorAll('div.areaDiv').forEach( elm => data_confirm.push(elm.textContent))
      
      dataMap.forEach( data => console.log(JSON.stringify(data)))

      return {
        data: dataMap
      }
    })
    .then( ({data}) => {
      data.forEach( (elm) => {
        elm.forEach(e => console.log(e))
        console.log("\n\n")
      })
      console.log("Reussi")
    })
} 


//getMapData()

//getStatCovid()
//getDataFrance()

