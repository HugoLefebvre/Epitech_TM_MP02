import axios from 'axios'
import main from '../../../App'

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

      submit: function() {
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
            console.log(response)
            self.error_conn = ""
            localStorage.AccessKey = response.data.jwt;
            self.$parent.$parent.AccessKey = response.data.jwt;
            self.$parent.$parent.IdUser = response.data.idCurrentUser;
            self.$parent.$parent.Role = response.data.roleCurrentUser;

            console.log(self.$parent.$parent.AccessKey)
            console.log(self.$parent.$parent.IdUser)

        }).catch(function(error){
            self.error_conn = "Connexion failed"
            console.log(error);
        });
      }
  }
}
