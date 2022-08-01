import { GetStaticPropsContext, NextPage } from "next"

const Summoner: NextPage<any> = ({ summoner }) => {
  return (
    <>
      <h1>Summoner</h1>
    </>
  )
}

export async function getServerSideProps(context: GetStaticPropsContext) {

}

export default Summoner