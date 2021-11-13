import { ApiHjarntorget } from './apiHjarntorget'
import { FetcherOptions } from '../../api/lib/fetcher'
import { Fetch } from '../../api/lib/types'
import { Api } from '../../api/lib/api'
import { RNCookieManager,
  ToughCookieJar,
  wrapReactNativeCookieManager,
  wrapToughCookie } from '../../api/lib/cookies'

const init = (
  fetchImpl: Fetch,
  cookieManagerImpl: RNCookieManager | ToughCookieJar,
  options?: FetcherOptions
): Api => {
  // prettier-ignore
  const cookieManager = ((cookieManagerImpl as RNCookieManager).get)
    ? wrapReactNativeCookieManager(cookieManagerImpl as RNCookieManager)
    : wrapToughCookie(cookieManagerImpl as ToughCookieJar)
  return new ApiHjarntorget(fetchImpl, cookieManager, options)
}

export default init
