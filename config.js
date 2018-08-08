'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'YTNBAIGFVMM6775WFFKYP32JDE3BHCOZ'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAGI9ncKQxgBAMPrvh7Ogr0mbWZCEfRlZBeWbDu7z4YI7AeI0JKuZCH0Y3lIki2MTd27scEFsVCcs5SdfiVKe1qK7W7PgLeLxUtt4FOsTgVx8xFmiHZCLwmcSeuCksvd2rVu4upDeMiBPhdBvs7M0LXy2jXkb07y7tuGD9xEXh7n10SKMWlm'
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}