
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Filter = ({onChange, filterType}) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    // const [filter,setFilter] = useState('')
    // const handleChange = (e) => {
    //     onFilterChange(e.target.value)
    // }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className='flex items-center text-sm space-x-1'>
                <span> { filterType ? "Viewing" : ""} </span>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    <span>  { filterType ? filterType : "Filter By"} </span>
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item onClick={ () => onChange('All')}>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            All
                        </a>
                        )}
                    </Menu.Item >
                    <Menu.Item onClick={ () => onChange('Pending')}>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Pending
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item onClick={ () => onChange('Completed')}>
                        {({ active }) => (
                        <a
                            href="#"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                            )}
                        >
                            Completed
                        </a>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
    )

}
export default Filter