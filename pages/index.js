import Head from 'next/head'
import food from '../food.json'
import wine from '../beverages.json'
import List from '../components/Lists'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <List list={food} type={'Food'}/>
        <List list={wine} type={'Beverages'}/>
      </main>

    </div>
  )
}
