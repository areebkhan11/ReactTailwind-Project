import React from 'react'
import Card from '../components/Card'
import DashboardSection2 from '../components/DashboardSection2'

export default function Dashboard() {

  var date = new Date();


  return (
    <div className="flex flex-col flex-wrap justify-start"  >
      <div className='flex justify-start mt-5 bg-[#039be5] p-1 text-white text-2xl'>
        <h3>Team's Dashboard</h3>
      </div>

      <div className='flex flex-row gap-4 place-items-start  mt-6 ' >
        <Card>
          <div className="py-3 px-6 border-gray-300 flex justify-start text-xl">
            <select
              type="text"
              autoComplete="given-name"
              className="form-control block font-medium rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>Specific Date</option>
            </select>
          </div>

          <div className="p-6">
            <h5 className="text-xl font-medium mb-2">{date.toLocaleDateString()}</h5>
            <p className={`text-base text-[#03a9f4] mb-4 font-medium text-7xl`}>
              0
            </p>
            <h5 className='text-xl font-medium'>DUE TASKS</h5>
          </div>

          <div class="flex justify-start font-medium py-3 px-6 border-t border-gray-300">
            Completed: 0
          </div>

          <div class="flex justify-start font-medium py-3 px-6 border-t border-gray-300">
            Assigned Task: 0
          </div>
        </Card>

        <Card>
          <div className="py-3 px-6 border-gray-300 font-medium flex justify-start text-xl">
            Overdue
          </div>

          <div className="p-6">
            <h5 className="text-xl font-medium mb-2">Until Today</h5>
            <p className={`text-base text-[#f44336] mb-4 font-medium text-7xl`}>
              0
            </p>
            <h5 className='text-xl font-medium'>DUE TASKS</h5>
          </div>

          <div class="flex justify-start font-medium py-9 px-6 border-t border-gray-300">
            {`Until ${date.toLocaleDateString()} : 0`}
          </div>
        </Card>

        <Card>
          <div className="py-3 px-6 border-gray-300 font-medium flex justify-start text-xl">
            Tickets
          </div>

          <div className="p-6 mt-4 mb-5">
            <p className={`text-base text-[#ff9800] mb-4 font-medium text-7xl`}>
              0
            </p>
            <h5 className='text-xl font-medium'>OPEN</h5>
          </div>

          <div class="flex justify-start font-medium py-3 px-6 border-t border-gray-300">
            Closed Today: 0
          </div>

          <div class="flex justify-start font-medium py-3 px-6 border-t border-gray-300">
            Verification Pending:
            <select
              type="text"
              autoComplete="given-name"
              className="form-control block font-medium rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </Card>

        <Card>
          <div className="py-3 px-6 border-gray-300 font-medium flex justify-start text-xl">
            Targets
          </div>

          <div className="p-6">
            <p className={`text-base text-[#607d8b] mb-4 font-medium text-7xl`}>
              0
            </p>
          </div>

          <div class="flex justify-start font-medium py-4 px-6 mb-2 border-t border-gray-300">
            Verification Pending:
            <select
              type="text"
              autoComplete="given-name"
              className="form-control block font-medium rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>

          <div class="flex justify-start font-medium py-9 px-6 border-t border-gray-300">
            View All Targets:
            <select
              type="text"
              autoComplete="given-name"
              className="form-control block font-medium rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </Card>
      </div>

      <div className='flex flex-row gap-5 mt-6 col-span-2 mb-8'>
        <DashboardSection2>
          <div className='flex justify-start font-medium text-xl py-4 px-4'>
            Task Distribution
          </div>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-black-500 dark:text-black-400">
              <thead class="text-sm text-black-700 uppercase bg-white-50 dark:bg-white-700 dark:text-black-400">
                <tr className='border-b border-t divide-x text-center'>
                  <th scope="col" class="py-3 px-6">
                    TASK
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {`Assigned (A)`}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {`Completed (B)`}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {`Individual \n`}
                    {`(B/A) * 100`}
                  </th>
                  <th scope="col" class="py-3 px-6">
                    {`Total \n`}
                    {`(B/A) * 100`}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-black-800 divide-x dark:border-black-700">
                  <th scope="row" class="py-4 px-6 font-medium text-black-900 whitespace-nowrap dark:text-black">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="py-4 px-6">
                    Sliver
                  </td>
                  <td class="py-4 px-6">
                    Laptop
                  </td>
                  <td class="py-4 px-6">
                    $2999
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-black-800 divide-x dark:border-black-700">
                  <th scope="row" class="py-4 px-6 font-medium text-black-900 whitespace-nowrap dark:text-black">
                    Microsoft Surface Pro
                  </th>
                  <td class="py-4 px-6">
                    White
                  </td>
                  <td class="py-4 px-6">
                    Laptop PC
                  </td>
                  <td class="py-4 px-6">
                    $1999
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-black-800 divide-x border-b">
                  <th scope="row" class="py-4 px-6 font-medium text-black-900 whitespace-nowrap dark:text-black">
                    Magic Mouse 2
                  </th>
                  <td class="py-4 px-6">
                    Black
                  </td>
                  <td class="py-4 px-6">
                    Accessories
                  </td>
                  <td class="py-4 px-6">
                    $99
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='flex  justify-evenly gap-16 font-medium text-xl py-10 border-t mt-8'>
              <p>{`Team Assigned Tasks (C)`}</p>
              <p>Team Completed Tasks</p>
            </div>
          </div>
        </DashboardSection2>

        <DashboardSection2>
          <div className='flex justify-between py-4 px-4 border-b'>
            <p className='font-medium text-xl'>Task Distribution</p>
            <div className="border-gray-300 text-gray-500 flex justify-start text-lg">
              <select
                type="text"
                autoComplete="given-name"
                className="form-control block font-medium rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
              >
                <option>All</option>
                <option>This Week</option>
              </select>
            </div>
          </div>

          <h3 className='font-medium text-xl'>Assign Task</h3>


          <div class="grid place-content-end h-80">
            <span class="text-sm text-gray-700 dark:text-gray-400 mr-5">
              Showing <span class="font-semibold text-gray-900 dark:text-black">1</span> to <span class="font-semibold text-gray-900 dark:text-black">10</span> of <span class="font-semibold text-gray-900 dark:text-black">100</span> Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              <button class="py-2 px-4 text-sm font-medium text-white rounded-l dark:border-gray-700 dark:text-gray-400">
                Prev
              </button>
              <button class="py-2 px-4 text-sm font-medium text-white rounded-r border-0 border-l border-gray-700 dark:border-gray-700 dark:text-gray-400">
                Next
              </button>
            </div>
          </div>

        </DashboardSection2>
      </div>
    </div>
  )
}
