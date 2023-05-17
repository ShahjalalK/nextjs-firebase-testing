import { Community } from '@/atoms/communityAtom'
import Header from '@/components/community/header'
import NotFound from '@/components/community/notFound'
import { fireStore } from '@/firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'
import SafeJsonStringfy from 'safe-json-stringify'
type Props = {
    communityData : Community
}

const CommunityPage = ({communityData}: Props) => {
    if(!communityData){
        return <NotFound />
    }
  return (
    <>
        <Header communityData={communityData} />
    </>
  )
}




export async function getServerSideProps(context : GetServerSidePropsContext) {
    try{
        const communiyDocRef = doc(fireStore, 'communities', context.query.communityId as string)
        const communityDoc = await getDoc(communiyDocRef)

        return {
            props: {
                communityData : communityDoc.exists() ? JSON.parse(SafeJsonStringfy({id: communityDoc.id, ...communityDoc.data()})) : ""
            }, 

          };

    } catch(error){
        console.log('getServerSideProps error', error)

    }
    
  }


  export default CommunityPage