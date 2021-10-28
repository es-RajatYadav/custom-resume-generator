import { Database } from '../plugins/firebase';
import { getDoc, doc } from 'firebase/firestore';

export default async function ({store, route, redirect}){
  const currentUser = store.state.Authentication.user;
  const AuthenticatedRoutes = /\/user\/*/g;

  if(!currentUser && route.path.match(AuthenticatedRoutes)){
    redirect('/login');
  }else if( currentUser && !route.path.match(AuthenticatedRoutes)){
    const currentUserDataSnapshot = await getDoc(doc(Database, "UserUID", currentUser.uid));
    if(currentUserDataSnapshot.exists()){
      redirect(`/user/${currentUserDataSnapshot.data().CST_username}`);
    }else {
      alert('Error');
    }
  }
}
