import {Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight} from 'lucide-react'
export function AttendeeList(){
    return(
        <div className='flex flex-col gap-4'>
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div  className="flex items-center gap-3 px-3 py-1.5 w-72 border border-white/10 rounded-lg">
            <Search className='size-4 text-emerald-300'/>
            <input className="flex-1 outline-none bg-transparent h-auto border-0 p-0 text-sm" placeholder="Buscar Participante..." />
            </div>
        </div>


        <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
            <thead>
                <tr className='border-b border-white/10 p-4'>
                    <th style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                        <input type="checkbox" className='size-4 bg-black/20 border-white/10 rounded'/>
                        </th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Code</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Participants</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Registrion Date</th>
                    <th className='py-3 px-4 text-sm font-semibold text-left'>Check-in Date</th>
                    <th style={{width: 64}} className='py-3 px-4 text-sm font-semibold text-left'></th>
                </tr>
            </thead>
            <tbody>
               {Array.from({length: 8}).map((_,i)=>{
                return(
                    <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                    <td className='py-3 px-4 text-sm text-zinc-300'>
                        <input type="checkbox" className='size-4 bg-black/20 border-white/10 rounded'/>
                    </td>
                    <td className='py-3 px-4 text-sm text-zinc-300'>12345</td>
                    <td className='py-3 px-4 text-sm text-zinc-300'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-white font-semibold'>Antonio Rewelli</span>
                            <span>reuli@gmail.com</span>
                        </div>
                    </td>
                    <td className='py-3 px-4 text-sm text-zinc-300'>7 days ag</td>
                    <td className='py-3 px-4 text-sm text-zinc-300'>3 days ago</td>
                    <td className='py-3 px-4 text-sm text-zinc-300'>
                        <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                            <MoreHorizontal className='size-4'/>
                        </button>
                    </td>
                </tr>
                )
               }
            )}
            </tbody>
            <tfoot>
                <tr>
                    <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>Showind 10 of 228 items</td>
                    <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}> 
                        <div className='inline-flex items-center gap-8'>
                                <span>page 1 of 23</span>
                            <div className='flex gap-1.5'>
                                <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                    <ChevronsLeft className='size-4'/>
                                </button>
                                <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                    <ChevronLeft className='size-4'/>
                                </button>
                                <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                    <ChevronRight className='size-4'/>
                                </button>
                                <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                    <ChevronsRight className='size-4'/>
                                </button>
                            </div>
                        </div>
                    </td>
                    
                </tr>
            </tfoot>
        </table>
        <div/>
        </div>
        </div>
        
    )
}