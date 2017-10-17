
export const proxy = `https://bird.ioliu.cn/v1?url=`

export const search = (word) => `${proxy}https://lvyou.baidu.com/search/ajax/scene?pn=0&rn=20&word=${word}`

export const detail = (sid) => `${proxy}https://lvyou.baidu.com/destination/app/view?
sid=${sid}&ad_param={"industry":1,"na_type":2,"address_id":29,"scene_id":"${sid}"}&apiv=v5`

export const view = (sid) => `${proxy}
https://lvyou.baidu.com/destination/ajax/webapp/allview?sid=${sid}&rn=10&pn=0&cid=0`

export const food = (sid) => `${proxy}
https://lvyou.baidu.com/destination/ajax/getroute?sid=${sid}&route=dining&format=ajax`

export const shop = (sid) => `${proxy}
https://lvyou.baidu.com/destination/ajax/getroute?sid=${sid}&route=shopping&format=ajax`

export const hotel = (sid) => `${proxy}
https://lvyou.baidu.com/destination/ajax/webapp/hotel/list?sid=${sid}&rn=10&pn=0`

export const traffic = (sid) => `${proxy}
https://lvyou.baidu.com/destination/ajax/getroute?sid=${sid}&route=traffic.remote&format=ajax`

export const routers = (sid) => `${proxy}
https://lvyou.baidu.com/plan/webapp/list?sids=${sid}&rn=15&pn=0&t=1508216901368`

export const route = (plid, n) => `${proxy}
https://lvyou.baidu.com/plan/webapp/newdetail?pl_id=${plid}&from_day=0&days=${n}`








