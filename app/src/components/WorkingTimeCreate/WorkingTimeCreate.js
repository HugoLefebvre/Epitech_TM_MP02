import axios from 'axios'

export default {
  name: 'working-time-create',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    createWorkingTime: function() {
      axios({
        method: 'post',
        url: 'http://localhost:4000/api/workingtimes/' + this.userID,
        data: {
          working_time : {
            start: this.startDate + ' ' + this.startTime + ':00',
            end: this.endDate + ' ' + this.endTime + ':00'
          }
        }
      }).then(function(response) {
        this.$router.push("/working-time/" + this.userID);
      }).catch(function(error){
        console.log(JSON.stringify(error, null, 2));
      });
      this.$router.push("/working-time/" + this.userID);
    }
  }
}
