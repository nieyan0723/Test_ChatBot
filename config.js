'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'YTNBAIGFVMM6775WFFKYP32JDE3BHCOZ'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAGI9ncKQxgBAEwF8V2JRw2tNKUpeDVw6SaxE2EFyqt13QO4mkyutNetcvtXhdAowCmwLSvwvf76jpwsoxX2A9SqCH2LcGigeHomcidIFz5nZCDse59uZBAVUMs2YvgH58d9BgfOtp27HSLWTIuqpVOvD9xLHGvAulz30FuwZDZD'
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}