import Web3 from 'web3'
import { Nos } from '../../src/@types'
import { increaseTime } from '../../src/helpers'
import Listing from '../../src/contracts/listing'

/**
 * convenience method to...
 */
// export async function whitelist(
  // web3:Web3,
  // provider:any,
  // registry:Registry,
  // listing:string,
  // account:string,
  // deposit:Nos=ParameterDefaults.MIN_DEPOSIT
// ): Promise<boolean> {
  // await registry.apply(web3, listing, deposit, '', { from: account })
  // await increaseTime(provider, ParameterDefaults.APPLY_STAGE_LENGTH + 1)
  // await registry.updateStatus(web3, listing, { from: account })
  // return await registry.isWhitelisted(listing)
// }
