export default function (context) {
  //console.log(context.store.state)

  if(context.route.path!='/login'&&context.route.path!='/register'){
    context.$cookiz.set('previousPage',context.route.path)
  }
}
