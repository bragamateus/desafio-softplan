package br.com.cadastropessoa.backend.model.repository;

import br.com.cadastropessoa.backend.model.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {
}
