export default function UserCard({ userInfos }) {
  
    return (
      <div className='max-w-72 shadow-lg text-sm m-6 rounded-lg overflow-hidden'>
        <div className='h-32 w-full bg-green-500' />
        <div className='rounded-full size-28 relative bottom-12 left-4 bg-slate-400' />
        <div className='p-4'>
          <h2>{userInfos.name} {userInfos.lastName}</h2>
          <p>Age: {userInfos.age}</p>
          <p>Email: {userInfos.email}</p>
          <p>Created at: {userInfos.createdAt}</p>
        </div>
      </div>
    )
  }
  