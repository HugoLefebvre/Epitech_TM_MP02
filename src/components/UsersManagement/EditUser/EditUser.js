import axios from 'axios';

export default {
  name: 'edit-user',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      username: '',
      email:  '',
      password: '',
      userRole:''
    }
  },
  computed: {

  },
  mounted () {

    if(localStorage.Role) this.role = localStorage.Role

    var self = this;

    axios({
      method: 'get',
      url: 'http://localhost:4000/api/users/' + this.userID,
      headers: {
        'Authorization': 'Bearer ' + localStorage.AccessKey
      }
    })
    .then(function(response) {
      console.log(JSON.stringify(response, null, 2));
      self.username = response.data.data.username;
      self.email = response.data.data.email;
    })
    .catch(function(error) {
      console.log(JSON.stringify(error, null, 2));
    })
  },
  methods: {

    submit: function() {
      this.updateUser().then(this.redirection());
    },

    updateUser: function() {
      return axios({
        method: 'put',
        url: 'http://localhost:4000/api/users/' + this.userID,
        data: {
          user: {
            username: this.username,
            email: this.email,
            password: this.password
          }
        },
        headers: {
          'Authorization': 'Bearer ' + localStorage.AccessKey
        }
      }).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      })
    },

    redirection: function() {
      this.$router.push({
        name: 'users'
      })
    }
  }
}
