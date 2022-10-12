import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-tests/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | scientists', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /scientists', async function (assert) {
    await visit('/scientists');

    assert.strictEqual(currentURL(), '/scientists');
  });

  test('check scientists list', async function (assert) {
    // Quantidade de registros que serão criados e comparado com o total exibido na tela
    const scientistsAmount = 6;

    // Cria a lista de scientist no banco de dados do mirage com a quantidade solicitada
    const scientists = await this.server.createList(
      'scientist',
      scientistsAmount
    );

    // Visita a página que exibe a lista de scientist
    await visit('/scientists');

    // seleciona o elemento através do data-test adicionado na página
    const list = document.querySelector('[data-test-scientists-list]');

    // verifica se a quantidade de scientists está correta
    assert.deepEqual(
      list.childElementCount,
      scientistsAmount,
      `${scientistsAmount} scientists are rendered`
    );

    // transforma o elemento em uma lista de elementos
    const listArray = Array.from(list.children);

    // converte a lista de elementos html em uma lista de string com o nome de cada scientist ex: ['Ana', 'Paulo']
    const scientistsListRendered = listArray.map(
      (children) => children.textContent
    );

    // converte a lista de Mirage Object em uma lista de string com o nome de cada scientist ex: ['Ana', 'Paulo']
    const scientistsListOnDatabase = scientists.map(
      (scientist) => scientist.name
    );

    // compara ambas as listas
    assert.deepEqual(
      scientistsListRendered,
      scientistsListOnDatabase,
      'scientists list is correct rendered'
    );
  });
});
