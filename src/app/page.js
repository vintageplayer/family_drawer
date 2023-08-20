import DashboardExample from './home';

export const dynamic = 'force-dynamic';

export default async function IndexPage() {
  // const search = searchParams.q ?? '';
  // const users = await queryBuilder
  //   .selectFrom('users')
  //   .select(['id', 'name', 'username', 'email'])
  //   .where('name', 'like', `%${search}%`)
  //   .execute();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <DashboardExample />
    </main>
  );
}