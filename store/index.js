export const state = () => ({
  screenSize:null,
  themeDark:false,
  user:{
    info:{
      username:null,
      email:null,
      dob:null
    },
    logged:false
  },
})

export const mutations = {
  getSizeScreen(state){
    var width=window.innerWidth
    if(width<600){
      state.screenSize= 'xs'
    }
    else if( width>600 && width<960){
      state.screenSize= 'sm'
    }
    else if(width>960 && width<1264){
      state.screenSize= 'md'
    }
    else if(width>1264 && width <1904){
      state.screenSize= 'lg'
    }
    else{
      state.screenSize= 'xl'
    }
  },
  switchTheme(state,value=null){
    if(value==null){
      state.themeDark=!state.themeDark
    }
    else{
      state.themeDark=value
    }
    localStorage.setItem('theme',state.themeDark)
  },
  logged(state,user){
    state.user.logged=true
    state.user.info.username=user.username
    state.user.info.dob=user.dob
    state.user.info.email=user.email
  },
  logout(state){
    state.user.logged=false
    state.user.info={}
  },
}


