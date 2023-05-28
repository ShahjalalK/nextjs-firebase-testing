import PageNotFound from '@/components/pageNotFound'
import Post from '@/components/post'
import UserInfo from '@/components/userInfo'
import { fireStore } from '@/firebase/firebaseConfig'
import { UserType } from '@/recoil/userAtom'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import safeJsonStringify from 'safe-json-stringify'

type Props = {
  profileData : UserType
}

const ProfileId = ({profileData}: Props) => {
  if(!profileData){
    return <PageNotFound />
  }

 
  return (
    <div className="flex my-5 flex-grow max-w-4xl mx-auto gap-5">
  <div className="flex-grow">
    <Post profileData={profileData} />
    
  </div>
  
  <div>
    <UserInfo profileData={profileData} />
  </div>
</div>
  )
}

export default ProfileId


export const getServerSideProps = async (context : GetServerSidePropsContext) => {
  const userdocRef = doc(fireStore, `users/${context.query.pid as string}`)
  const userDoc = await getDoc(userdocRef)
  return { props: { 
    profileData : userDoc.exists() ? JSON.parse(safeJsonStringify({id: userDoc.id, ...userDoc.data()})) : ""
   } };
};
 