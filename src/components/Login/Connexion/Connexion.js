import axios from 'axios'

export default {
  name: 'connexion',
  components: {},
  props: [],
  data () {
    return {
        email:'',
        password:'',
        error_conn:''
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
      // At the submission of the form
      submit: function() {
        // Synchronize methods : do first then do the second
        this.ConnectUser().then(this.redirection);
      },

      ConnectUser: function() {
          var self = this;
        // Must return to authorize then clause
        return axios({
          method: 'post',
          url: 'http://localhost:4000/api/users/sign_in',
          data: {
                  email : this.email,
                  password : this.password
          }
        }).then(function(response) {
            self.error_conn = ""
            localStorage.AccessKey = response.data.jwt;
            self.$parent.$parent.AccessKey = response.data.jwt;
        }).catch(function(error){
            self.error_conn = "Connexion failed"
            console.log(error);
        });
      }
  }
}
