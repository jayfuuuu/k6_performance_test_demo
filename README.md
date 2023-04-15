# `k6_performance_test_demo`

> This is a performance testing model with k6, and grafana.

### `Architecture`

```
.
├── README.md
├── api
│   ├── k6
│   │   └── api.js
│   └── pytest
│       └── api.js
├── requirement.txt
├── scenarios
│   ├── base_scenario.js
│   ├── k6
│   │   └── k6_scenario.js
│   └── pytest
│       └── pytest_scenario.js
└── tests
    ├── k6
    │   └── test.js
    └── pytest
        └── test.js
```

### `Demo`

```
k6 run --out influxdb=http://localhost:8086/my_k6_db tests/k6/test.js

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: tests/k6/test.js
     output: InfluxDBv1 (http://localhost:8086)

  scenarios: (100.00%) 2 scenarios, 80 max VUs, 1m0s max duration (incl. graceful stop):
           * contacts: 100 iterations shared among 30 VUs (maxDuration: 30s, exec: contacts, gracefulStop: 30s)
           * news: 50 looping VUs for 30s (exec: news, gracefulStop: 30s)

     ✓ is status 200

     checks.........................: 100.00% ✓ 5357       ✗ 0   
     data_received..................: 8.8 MB  288 kB/s
     data_sent......................: 1.2 MB  39 kB/s
     http_req_blocked...............: avg=15.25ms  min=0s       med=3µs      max=2.59s    p(90)=5µs      p(95)=8µs     
     http_req_connecting............: avg=5.9ms    min=0s       med=0s       max=307.86ms p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=275.82ms min=211.77ms med=275.03ms max=1.44s    p(90)=316.63ms p(95)=325.64ms
       { expected_response:true }...: avg=275.82ms min=211.77ms med=275.03ms max=1.44s    p(90)=316.63ms p(95)=325.64ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 5357
     http_req_receiving.............: avg=79.83µs  min=8µs      med=51µs     max=7.33ms   p(90)=99µs     p(95)=133µs   
     http_req_sending...............: avg=19.04µs  min=3µs      med=17µs     max=474µs    p(90)=30µs     p(95)=36µs    
     http_req_tls_handshaking.......: avg=9.32ms   min=0s       med=0s       max=2.32s    p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=275.72ms min=211.75ms med=274.93ms max=1.44s    p(90)=316.5ms  p(95)=325.52ms
     http_reqs......................: 5357    175.468904/s
     iteration_duration.............: avg=291.23ms min=211.87ms med=287.24ms max=2.85s    p(90)=319.65ms p(95)=337.67ms
     iterations.....................: 5357    175.468904/s
     vus............................: 50      min=50       max=80
     vus_max........................: 80      min=80       max=80

running (0m30.5s), 00/80 VUs, 5357 complete and 0 interrupted iterations
contacts ✓ [======================================] 30 VUs  02.5s/30s  100/100 shared iters
news     ✓ [======================================] 50 VUs  30s      
```

### `Requirement`

* *k6*
* *influxdb*
* *grafana*

### `Installation for macOS`

```
for k6
> brew install k6
for influxdb
> brew install influxdb@1
for grafana
> brew install grafana
```

### `Usage`

```
for influxdb
> brew services start influxdb@1
and folder forward to /opt/homebrew/opt/influxdb@1/bin and create database used influx
for grafana
> brew services start grafana
and browser go to http://localhost:3000/
and import dashboard https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/

for k6
> k6 run --out influxdb=http://localhost:8086/my_k6_db test.js
```
