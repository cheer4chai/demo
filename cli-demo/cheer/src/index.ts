import { RenderEngine, Controller } from '@baidu/molecule';
import { OriginData, ParsedData } from './data';

/**
 * class CheerController
 */
export class CheerController implements Controller {
  static readonly engineType: string = 'smarty'
  private engine: RenderEngine

  /**
   * @param {RenderEngine} engine The engine instance specified by engineType
   */
  constructor (engine: RenderEngine) {
      this.engine = engine;
  }

  /**
   * @param {OriginData} data 原始输入数据
   * @return {ParsedData} 解析后的数据
   */
  parse (data: OriginData) {
      let { a, b } = data;
      // 处理原始数据
      a = 'this is a molecule module';
      b = 'hello Molecule';
      return { a, b } as ParsedData;
  }

  /**
   * @param {OriginData} data 原始输入数据
   * @return {string} result html
   */
  render (data: OriginData) {
      const tplData = this.parse(data);
      return this.engine.render('view/index.tpl', tplData);
  }
}
