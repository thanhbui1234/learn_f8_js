 

 /// nếu muốn sử dụng logger trong thằng app.js thì phải nạp nó vào với import và thằng logger import vào thì nó phải import ra

 
 import logger,{TYPE_LOG,TYPE_WARN,TYPE_ERROR} from './logger.js'

 logger('test message...', TYPE_WARN)