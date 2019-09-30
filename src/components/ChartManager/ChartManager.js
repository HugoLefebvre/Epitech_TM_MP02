// import { DonutChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import axios from 'axios'

export default {
  name: 'chart-manager',
  components: {
    // DonutChart, 
    LineChart
  },
  props: [],
  data () {
    return {
      user_ID:'',
      startTime: new Date, 
      endTime: new Date, 

      lineData : [], 
      xkey : '', 
      ykeys :[], 
      labels :[], 
      lineColors :[],
      xlabelangle: '45',
      
    //       klolo: [
    //   { y: '2006', a: 100, b: 90 },
    //   { y: '2007', a: 75,  b: 65 },
    //   { y: '2008', a: 50,  b: 40 },
    //   { y: '2009', a: 75,  b: 65 },
    //   { y: '2010', a: 50,  b: 40 },
    //   { y: '2011', a: 75,  b: 65 },
    //   { y: '2012', a: 100, b: 90 }
    // ],
    // xkey: 'y',
    // ykeys: ['a', 'b'],
    // labels: ['Series A', 'Series B'],
    // lineColors:[ "#FF6384", "#73c000"]
    }
  },
  computed: {

  },
  mounted () { 
    var self = this; 
    self.user_ID = localStorage.IdUser;

    self.startTime.setDate(self.startTime.getDate() - 7);
    
    var Stime = self.startTime.getFullYear() + '-' + self.pad(self.startTime.getMonth()+1) + '-' + 
    self.pad(self.startTime.getDate()) + '+' + '00:00:00'

    var Etime = self.endTime.getFullYear() + '-' + self.pad(self.endTime.getMonth()+1) + '-' + 
    self.pad(self.endTime.getDate()) + '+' + self.pad(self.endTime.getHours()) + ':' + 
    self.pad(self.endTime.getMinutes()) + ':' + self.pad(self.endTime.getSeconds());
    
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/workingtimes/'+ self.user_ID + '?start=' + Stime + '&end=' + Etime,
      headers: {
        'Authorization': 'Bearer ' + localStorage.AccessKey
      }
    })
    .then(function (response) {

      var data = response.data.data; 
      var avg;
      var obj;
      var i = 0;
      for (i = 0; i < data.length; i++) {
        if (i>0){
          if (data[i].start.substring(0,10) == data[i-1].start.substring(0,10)){
            avg += Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
            self.lineData.pop(); 
            obj = {date: data[i].start.substring(0,10).toString(), a: avg};
            self.lineData.push(obj); 
          }
          else{
            avg = Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
            obj = {date: data[i].start.substring(0,10).toString(), a: avg};
            self.lineData.push(obj); 
          }
        }
        else{
          avg = Math.abs(new Date(data[i].end) - new Date(data[i].start))/(1000 * 60 * 60);
            obj = {date: data[i].start.substring(0,10).toString(), a: avg};
            self.lineData.push(obj); 
        }
      }
      self.xkey ='date'; 
      self.ykeys.push('a');
      self.labels.push('Series A');
      self.lineColors.push('#FF6384');
      console.log(self.lineData);
     })
    .catch(function (error) {
      console.log(error);
    });



  },
  methods: {

    pad:function(number){
      var str = number;
      if (number<10){
        str = '0'+number;
      }
      return str;
    },

  }
}


      // donutData: [
      //   { label: 'Car', value: 40 },
      //   { label: 'Motorcycle', value: 150 },
      //   { label: 'airplane', value: 100 }
      // ],  
      // arrayColors:[ "#FF6384", "#73c000", "#FFCE56" ], 